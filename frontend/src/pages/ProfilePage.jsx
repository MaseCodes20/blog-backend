import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import ProfilePosts from "../components/profilePage/ProfilePosts";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="pageContainer">
      <ProfileHeader user={user} />

      {/* Posts */}
      <ProfilePosts user={user} />
    </div>
  );
}

export default ProfilePage;
