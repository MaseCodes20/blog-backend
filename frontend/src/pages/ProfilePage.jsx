import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import ProfilePosts from "../components/profilePage/ProfilePosts";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <ProfileHeader author={user} />

        {/* Posts */}
        <ProfilePosts author={user} />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
