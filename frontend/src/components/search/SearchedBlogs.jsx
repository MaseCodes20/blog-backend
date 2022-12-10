import React from "react";
import SearchedBlog from "./SearchedBlog";

function SearchedBlogs({ searchedBlogs }) {
  return (
    <div className="">
      <h3 className="w-full mb-3 p-2 bg-slate-400">Blogs</h3>

      {searchedBlogs?.map((blog) => {
        return <SearchedBlog key={blog?._id} blog={blog} />;
      })}
    </div>
  );
}

export default SearchedBlogs;
