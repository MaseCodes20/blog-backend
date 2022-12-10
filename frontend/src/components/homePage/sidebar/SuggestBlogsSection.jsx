import React from "react";
import { useSelector } from "react-redux";
import SuggestedBlogs from "./SuggestedBlogs";

function SuggestBlogsSection() {
  const { user } = useSelector((state) => state.auth);
  const users = useSelector((state) =>
    state.users.users.filter((selectedUser) => selectedUser._id !== user?._id)
  );

  let suggestedUsers = users
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 4);

  return (
    <div className="w-full p-3 mb-5">
      <h2 className="font-semibold text-[20px] mb-3">Check out thes blogs</h2>

      {/* Profile Cards */}
      <SuggestedBlogs suggestedUsers={suggestedUsers} />
    </div>
  );
}

export default SuggestBlogsSection;
