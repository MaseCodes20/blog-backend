import React from "react";
import { Link } from "react-router-dom";
import FollowButton from "../../profilePage/FollowButton";

function SuggestedBlog({ suggestUser }) {
  return (
    <div
      key={suggestUser?._id}
      className="flex items-center mb-3 bg-gray-200 hover:bg-gray-300 rounded-md p-2"
    >
      <Link
        to={`profile/${suggestUser?._id}`}
        className="flex flex-1 items-center"
      >
        <img
          src={
            suggestUser?.profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={suggestUser?.name}
          className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] mr-[10px] rounded-full object-cover"
        />

        <div className="w-[65px] lg:w-[80px]">
          <p className="text-xs w- lg:text-sm truncate">{suggestUser?.name}</p>
          <p className="text-[10px] lg:text-xs font-light text-gray-700 truncate">
            {suggestUser?.username}
          </p>
        </div>
      </Link>

      <FollowButton otherUser={suggestUser} />
    </div>
  );
}

export default SuggestedBlog;
