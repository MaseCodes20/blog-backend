import React from "react";
import { useSelector } from "react-redux";
import SearchedBlogs from "./SearchedBlogs";
import SearchedTags from "./SearchedTags";

function SearchDropDownList() {
  const { searchTerm } = useSelector((state) => state.search);
  const { user } = useSelector((state) => state.auth);
  const tags = useSelector((state) =>
    state.posts.posts.map((post) => post.tags)
  )
    .join()
    .split(",");
  const { users } = useSelector((state) => state.users);

  let searchedTags = tags
    ?.filter((value) => {
      if (searchTerm === "") {
        return null;
      } else if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    })
    .slice(0, 5);

  let searchedBlogs = users
    ?.filter((value) => {
      if (searchTerm === "") {
        return null;
      } else if (
        value.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !value.name.toLowerCase().includes(user?.name.toLowerCase())
      ) {
        return value;
      }
    })
    .slice(0, 5);

  return (
    <>
      {searchTerm !== "" && (
        <div className="absolute right-0 mt-[19px] h-[480px] w-full origin-top-right divide-y  bg-white shadow-lg overflow-y-scroll">
          <SearchedTags searchedTags={searchedTags} />

          <SearchedBlogs searchedBlogs={searchedBlogs} />
        </div>
      )}
    </>
  );
}

export default SearchDropDownList;
