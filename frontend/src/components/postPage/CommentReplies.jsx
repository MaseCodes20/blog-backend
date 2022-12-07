import React from "react";
import CommentReply from "./CommentReply";

function CommentReplies({ comment }) {
  return (
    <div className="ml-4 my-2">
      {comment?.replies.map((reply) => {
        return <CommentReply key={reply._id} reply={reply} />;
      })}
    </div>
  );
}

export default CommentReplies;
