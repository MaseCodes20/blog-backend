import React from "react";
import { useState } from "react";
import CommentReply from "./CommentReply";

function CommentReplies({ comment }) {
  const [showReplies, setShowReplies] = useState(false);
  const { replies } = comment;

  const toggleShowReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <div className="ml-4 my-2">
      <button onClick={toggleShowReplies} className="text-gray-500 text-xs">
        <span className="mr-2">━━━━━</span> {showReplies ? "Hide" : "View"}{" "}
        replies ({replies.length})
      </button>
      {showReplies && (
        <>
          {replies?.map((reply) => {
            return <CommentReply key={reply._id} reply={reply} />;
          })}
        </>
      )}
    </div>
  );
}

export default CommentReplies;
