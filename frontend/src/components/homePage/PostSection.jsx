import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../../features/post/postsSlice";
import Post from "../Post";

function PostSection() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(allPosts());
  }, []);

  return (
    <section className="p-5 flex-[6] grid grid-cols-1 gap-5">
      {posts?.map((post) => {
        return <Post key={post._id} post={post} userId={post.userId} />;
      })}
    </section>
  );
}

export default PostSection;
