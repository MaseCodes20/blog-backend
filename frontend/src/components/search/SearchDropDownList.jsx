import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import SearchedBlogs from "./SearchedBlogs";
import SearchedTags from "./SearchedTags";

function SearchDropDownList({ searchTerm }) {
  const { user } = useSelector((state) => state.auth);
  const tags = useSelector((state) =>
    state.posts.posts.map((post) => post.tags)
  )
    .join()
    .split(",");
  const { users } = useSelector((state) => state.users);

  const searchedTags = useMemo(
    () =>
      tags
        ?.filter((value) => {
          if (searchTerm === "") {
            return null;
          } else if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value;
          } else {
            return null;
          }
        })
        .slice(0, 5),
    [searchTerm, tags]
  );

  const searchedBlogs = useMemo(
    () =>
      users
        ?.filter((value) => {
          if (searchTerm === "") {
            return null;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !value.name.toLowerCase().includes(user?.name.toLowerCase())
          ) {
            return value;
          } else {
            return null;
          }
        })
        .slice(0, 5),
    [searchTerm, users, user?.name]
  );

  return (
    <>
      {searchTerm !== "" && (
        <div className="absolute right-0 mt-[19px] max-h-[480px] w-full origin-top-right divide-y  bg-white shadow-lg overflow-y-scroll">
          {searchedTags.length > 1 && (
            <SearchedTags searchedTags={searchedTags} />
          )}

          {searchedBlogs.length > 1 && (
            <SearchedBlogs searchedBlogs={searchedBlogs} />
          )}
        </div>
      )}
    </>
  );
}

export default SearchDropDownList;
