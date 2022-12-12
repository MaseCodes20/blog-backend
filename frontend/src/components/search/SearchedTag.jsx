import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTag } from "../../features/search/SearchTagSlice";

function SearchedTag({ tag }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mb-3 bg-gray-200 hover:bg-gray-300 rounded-md p-2 mx-2">
      <button
        className="flex flex-1 items-center"
        onClick={() => {
          dispatch(setSearchTag(tag));
          navigate("/tags");
        }}
      >
        #{tag}
      </button>
    </div>
  );
}

export default SearchedTag;
