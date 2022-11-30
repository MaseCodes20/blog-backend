import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post";

function ProfilePosts({ author }) {
  const posts = useSelector((state) =>
    state.posts.posts.filter((post) => post.userId === author?._id)
  );
  return (
    <div className="grid grid-cols-2 justify-items-center gap-5 my-10">
      {posts.map((post) => {
        return <Post key={post._id} post={post} userId={post.userId} />;
      })}
    </div>
  );
}

export default ProfilePosts;
