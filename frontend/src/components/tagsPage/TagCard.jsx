import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTag,
  setSearchTag,
} from "../../features/search/SearchTagSlice";

function TagCard({ tag }) {
  const { searchTag } = useSelector((state) => state.searchTag);
  const dispatch = useDispatch();

  const toggleSearchButton = () => {
    if (searchTag === tag.name) {
      dispatch(clearSearchTag());
    } else {
      dispatch(setSearchTag(tag.name));
    }
  };
  return (
    <button
      onClick={toggleSearchButton}
      className="flex items-center justify-between w-[200px] p-2 bg-black text-white rounded-md shadow-md"
    >
      <p>{tag.name}</p>
      <p>{tag.total}</p>
    </button>
  );
}

export default TagCard;
