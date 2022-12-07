import React from "react";
import Comment from "./Comment";

function PostComments({ post }) {
  return (
    <div className="mb-5 min-h-[200px] max-h-[300px] overflow-y-scroll bg-gray-100">
      {post?.comments?.map((comment) => {
        return <Comment key={comment?._id} comment={comment} />;
      })}
    </div>
  );
}

export default PostComments;
