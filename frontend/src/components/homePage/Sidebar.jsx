import React from "react";
import SuggestBlogsSection from "./sidebar/SuggestBlogsSection";
import SuggestedPost from "./sidebar/SuggestedPostSection";

function Sidebar() {
  return (
    <div className="md:h-[calc(100vh-75px)] hidden md:flex md:flex-col items-center justify-between md:justify-start md:flex-[2] sticky top-[75px] border-b-[1px] md:border-l-[1px] bg-white border-black">
      {/* Blogs to check out */}
      <SuggestBlogsSection />

      <SuggestedPost />
    </div>
  );
}

export default Sidebar;
