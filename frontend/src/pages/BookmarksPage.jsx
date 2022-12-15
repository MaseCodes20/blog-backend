import React from "react";
import Bookmarks from "../components/bookmarksPage/Bookmarks";
import Footer from "../components/Footer";

function BookmarksPage() {
  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <h1 className="pageTitle">Bookmarks</h1>

        <Bookmarks />
      </div>

      <Footer />
    </div>
  );
}

export default BookmarksPage;
