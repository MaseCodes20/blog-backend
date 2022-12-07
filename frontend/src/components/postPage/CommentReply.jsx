import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import LikeReply from "./LikeReply";

function CommentReply({ reply }) {
  const { userId, comment: userReply, createdAt, likes } = reply;

  const commentUser = useSelector((state) =>
    state.users.users.find((user) => user?._id === reply?.userId)
  );

  let totalLikes = likes.length;
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="mb-2 border-gray-200 border-b-[1px]">
      <Link to={`/profile/${userId}`} className="flex items-center mb-2">
        <img
          src={
            commentUser?.profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={commentUser?.name}
          className="w-[20px] h-[20px] mr-[10px] rounded-full object-cover "
        />

        <h3 className="text-xs">{commentUser?.name}</h3>
      </Link>

      <div className="flex items-center">
        <p className="flex-1">{userReply}</p>

        <LikeReply reply={reply} />
      </div>

      <div className="flex items-center mt-2">
        <p className="text-xs text-gray-500 mr-5 ">{format(createdAt)}</p>

        {totalLikes >= 1 && (
          <p className="text-sm text-gray-600 mr-3">
            {numberFormat.format(totalLikes)}{" "}
            {totalLikes === 1 ? "like" : "likes"}
          </p>
        )}
      </div>
    </div>
  );
}

export default CommentReply;
