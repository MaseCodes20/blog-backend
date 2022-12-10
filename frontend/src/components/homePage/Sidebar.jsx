import React from "react";
import { Link } from "react-router-dom";
import SuggestedBlogs from "./sidebar/SuggestedBlogs";

function Sidebar() {
  return (
    <div className="md:h-[calc(100vh-75px)] flex md:flex-col items-center justify-between md:justify-start md:flex-[2] sticky top-[75px] border-b-[1px] md:border-l-[1px] bg-white border-black">
      {/* Blogs to check out */}
      <div className="w-full p-3 mb-5">
        <h2 className="font-semibold text-[20px] mb-3">Check out thes blogs</h2>

        {/* Profile Cards */}
        <SuggestedBlogs />
      </div>
    </div>
  );
}

export default Sidebar;
