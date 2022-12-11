import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post";

function LikedPosts() {
  const { user } = useSelector((state) => state.auth);
  const userLikes = useSelector((state) =>
    state.posts.posts.filter(
      (post) =>
        post.likes.find((like) => like.userId === user?._id)?.userId ===
        user?._id
    )
  );

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {userLikes?.map((like) => {
          return <Post key={like?._id} postId={like?._id} />;
        })}
      </div>
    </div>
  );
}

export default LikedPosts;
