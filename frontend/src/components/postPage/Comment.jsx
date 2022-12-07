import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import CommentOptions from "./CommentOptions";
import LikeComment from "./LikeComment";

function Comment({ comment }) {
  const { userId, comment: userComment, createdAt } = comment;

  const commentUser = useSelector((state) =>
    state.users.users.find((user) => user?._id === userId)
  );

  return (
    <div className="mb-5">
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

      <div className="flex">
        <p className="flex-1">{userComment}</p>
        <LikeComment comment={comment} />
      </div>

      <div className="flex items-center mt-2">
        <p className="text-[10px] text-gray-600 mr-5 ">{format(createdAt)}</p>

        <CommentOptions userId={userId} commentId={comment?._id} />
      </div>
    </div>
  );
}

export default Comment;
