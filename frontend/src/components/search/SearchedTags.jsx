import React from "react";
import SearchedTag from "./SearchedTag";

function SearchedTags({ searchedTags }) {
  return (
    <div className="mb-3">
      <h3 className="w-full mb-3 p-2 bg-slate-400">Tags</h3>

      {searchedTags?.map((tag, index) => {
        return <SearchedTag key={index} tag={tag} />;
      })}
    </div>
  );
}

export default SearchedTags;
