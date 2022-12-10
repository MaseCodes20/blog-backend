import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchTag } from "../features/search/SearchTagSlice";
import FollowButton from "./profilePage/FollowButton";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useSelector((state) => state.auth);
  const tags = useSelector((state) =>
    state.posts.posts.map((post) => post.tags)
  )
    .join()
    .split(",");
  const { users } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="relative ">
      <div className="relative h-[30px]">
        <div className="absolute left-0 ml-2 h-full flex items-center">
          <SearchIcon className="h-4" />
        </div>

        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          className="md:w-[600px] h-[30px] pl-8 w-full border-[1px] rounded-full  border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black pb-[2px]"
          placeholder="search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm !== "" && (
        <div className="absolute right-0 mt-[19px] h-[480px] w-full origin-top-right divide-y  bg-white shadow-lg overflow-y-scroll">
          <div className="mb-3">
            <h3 className="w-full mb-3 p-2 bg-slate-400">Tags</h3>

            {searchedTags?.map((tag) => {
              return (
                <div
                  key={tag}
                  className="flex items-center mb-3 bg-gray-200 hover:bg-gray-300 rounded-md p-2 mx-2"
                >
                  <button
                    className="flex flex-1 items-center"
                    onClick={() => {
                      dispatch(setSearchTag(tag));
                      navigate("/tags");
                      setSearchTerm("");
                    }}
                  >
                    #{tag}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="">
            <h3 className="w-full mb-3 p-2 bg-slate-400">Blogs</h3>

            {searchedBlogs?.map((blog) => {
              return (
                <div
                  key={blog?._id}
                  className="flex items-center mb-3 bg-gray-200 hover:bg-gray-300 rounded-md p-2 mx-2"
                >
                  <Link
                    to={`profile/${blog?._id}`}
                    className="flex flex-1 items-center"
                    onClick={() => setSearchTerm("")}
                  >
                    <img
                      src={
                        blog?.profilePicture ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      }
                      alt={blog?.name}
                      className="w-[40px] h-[40px] mr-[10px] rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm ">{blog?.name}</p>
                      <p className="text-xs text-gray-700 ">{blog?.username}</p>
                    </div>
                  </Link>

                  <FollowButton otherUser={blog} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
