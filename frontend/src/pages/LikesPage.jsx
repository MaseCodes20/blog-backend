import React from "react";
import LikedPosts from "../components/likesPags/LikedPosts";

function LikesPage() {
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Likes</h1>

      <LikedPosts />
    </div>
  );
}

export default LikesPage;
