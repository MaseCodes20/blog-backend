import React from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import ProfilePosts from "../components/profilePage/ProfilePosts";
import Spinner from "../components/spinners/Spinner";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="pageContainer">
      <ProfileHeader author={user} />

      {/* Posts */}
      <ProfilePosts author={user} />
    </div>
  );
}

export default ProfilePage;
