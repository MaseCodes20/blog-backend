import React from "react";
import { useSelector } from "react-redux";
import UsersFollowingList from "../components/followingPage/UsersFollowingList";
import Footer from "../components/Footer";

function FollowingPage() {
  const { user } = useSelector((state) => state.auth);
  const userInfo = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser._id === user?._id)
  );

  let followingTotal = userInfo?.following.length;
  const numberFormat = new Intl.NumberFormat("en-US");
  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <h1 className="pageTitle">
          Following ({numberFormat.format(followingTotal)}){" "}
          {followingTotal === 1 ? "user" : "users"}
        </h1>
        {followingTotal < 1 ? (
          <div className="flex items-center justify-center mt-20 md:mt-52">
            <p>Once you follow people, you'll see them here</p>
          </div>
        ) : (
          <UsersFollowingList following={userInfo?.following} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FollowingPage;
