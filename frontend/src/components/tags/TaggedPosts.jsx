import React from "react";
import Post from "../Post";

function TaggedPosts({ searchTag, posts }) {
  return (
    <div className="grid grid-cols-l md:grid-cols-2 justify-items-center my-10 gap-5">
      {posts
        ?.filter((value) => {
          if (searchTag === "") {
            return value;
          } else if (value.tags.includes(searchTag)) {
            return value;
          } else {
            return null;
          }
        })
        .map((post) => (
          <Post key={post._id} postId={post._id} />
        ))}
    </div>
  );
}

export default TaggedPosts;
