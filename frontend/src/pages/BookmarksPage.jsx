import React from "react";
import Bookmarks from "../components/bookmarksPage/Bookmarks";

function BookmarksPage() {
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Bookmarks</h1>

      <div className="grid grid-cols-l md:grid-cols-2 justify-items-center my-10 gap-5">
        <Bookmarks />
      </div>
    </div>
  );
}

export default BookmarksPage;
