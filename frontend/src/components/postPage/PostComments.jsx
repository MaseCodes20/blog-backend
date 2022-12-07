import React from "react";
import Comment from "./Comment";

function PostComments({ post }) {
  return (
    <div className="mb-5 min-h-[200px] bg-gray-100">
      {post?.comments?.map((comment) => {
        return <Comment key={comment?._id} comment={comment} post={post} />;
      })}
    </div>
  );
}

export default PostComments;
