import React from "react";
import { useSelector } from "react-redux";
import SuggestedPost from "./SuggestedPost";

function SuggestedPostSection() {
  const { user } = useSelector((state) => state.auth);
  const posts = useSelector((state) =>
    state.posts.posts.filter(
      (selectedPost) => selectedPost.userId !== user?._id
    )
  );

  let randomPost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)[0];

  return (
    <div className="w-full p-3 mb-5">
      <h2 className="font-semibold text-[20px] mb-3">Radar</h2>

      {/* Post */}

      <SuggestedPost post={randomPost} />
    </div>
  );
}

export default SuggestedPostSection;
