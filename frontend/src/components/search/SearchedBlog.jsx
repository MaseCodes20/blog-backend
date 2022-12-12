import React from "react";
import { Link } from "react-router-dom";
import FollowButton from "../profilePage/FollowButton";

function SearchedBlog({ blog }) {
  return (
    <div className="flex items-center mb-3 bg-gray-200 hover:bg-gray-300 rounded-md p-2 mx-2">
      <Link to={`profile/${blog?._id}`} className="flex flex-1 items-center">
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
}

export default SearchedBlog;
