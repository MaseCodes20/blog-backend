import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  clearSearchTag,
  setSearchTag,
} from "../../features/search/SearchTagSlice";

function TagCard({ tag }) {
  const { searchTag } = useSelector((state) => state.searchTag);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let currentPage = location.pathname.split("/")[1];

  const toggleSearchButton = () => {
    if (currentPage !== "tags") {
      navigate("/tags");
    }

    if (searchTag === tag.name) {
      dispatch(clearSearchTag());
    } else {
      dispatch(setSearchTag(tag.name));
    }
  };
  return (
    <button
      onClick={toggleSearchButton}
      className={`flex items-center justify-between w-[200px] truncate p-2 border-black border-2 ${
        searchTag === tag.name ? "bg-white text-black" : "bg-black"
      } text-white rounded-md shadow-md`}
    >
      <p className={`${currentPage === "tags" && "max-w-[180px] truncate"}`}>
        {tag.name}
      </p>
      {currentPage === "tags" && <p>{tag.total}</p>}
    </button>
  );
}

export default TagCard;
