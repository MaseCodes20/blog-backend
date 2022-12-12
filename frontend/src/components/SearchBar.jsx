import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import SearchDropDownList from "./search/SearchDropDownList";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative ">
      <div className="relative h-[30px]">
        <div className="absolute left-0 ml-2 h-full flex items-center">
          <SearchIcon className="h-4" />
        </div>

        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          className="md:w-[600px] h-[30px] pl-8 w-full border-[1px] rounded-full  border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black pb-[2px]"
          placeholder="search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <SearchDropDownList searchTerm={searchTerm} />
    </div>
  );
}

export default SearchBar;
