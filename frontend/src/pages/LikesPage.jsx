import React from "react";
import Footer from "../components/Footer";
import LikedPosts from "../components/likesPags/LikedPosts";

function LikesPage() {
  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <h1 className="pageTitle">Likes</h1>

        <LikedPosts />
      </div>
      <Footer />
    </div>
  );
}

export default LikesPage;
