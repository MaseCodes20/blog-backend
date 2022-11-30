import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import ProfilePosts from "../components/profilePage/ProfilePosts";

function AuthorProfilePage() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const { user } = useSelector((state) => state.auth);

  const author = useSelector((state) =>
    state.users.users.find((author) => author._id === userId)
  );

  if (user._id === author._id) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="pageContainer">
      <ProfileHeader user={author} />

      {/* Posts */}
      <ProfilePosts user={author} />
    </div>
  );
}

export default AuthorProfilePage;
