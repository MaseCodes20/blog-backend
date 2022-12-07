import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import CommentOptions from "./CommentOptions";
import CommentReplies from "./CommentReplies";
import CommentReplyForm from "./CommentReplyForm";
import EditCommentForm from "./EditCommentForm";
import LikeComment from "./LikeComment";

function Comment({ comment }) {
  const [isEditComment, setIsEditComment] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const { userId, comment: userComment, createdAt, likes } = comment;

  const commentUser = useSelector((state) =>
    state.users.users.find((user) => user?._id === userId)
  );

  const toggleEdit = () => {
    setIsEditComment(!isEditComment);
  };

  const toggleReply = () => {
    setIsReply(!isReply);
  };

  let totalLikes = likes.length;
  const numberFormat = new Intl.NumberFormat("en-US");

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
        {isEditComment ? (
          <EditCommentForm comment={comment} toggleEdit={toggleEdit} />
        ) : (
          <p className="flex-1">{userComment}</p>
        )}

        <LikeComment comment={comment} />
      </div>

      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500 mr-3 ">{format(createdAt)}</p>

        {totalLikes >= 1 && (
          <p className="text-sm text-gray-600 mr-3">
            {numberFormat.format(totalLikes)}{" "}
            {totalLikes === 1 ? "like" : "likes"}
          </p>
        )}

        <CommentOptions
          userId={userId}
          commentId={comment?._id}
          toggleEdit={toggleEdit}
          toggleReply={toggleReply}
        />
      </div>

      <CommentReplies comment={comment} />

      {isReply && (
        <CommentReplyForm comment={comment} toggleReply={toggleReply} />
      )}
    </div>
  );
}

export default Comment;
