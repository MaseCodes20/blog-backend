import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "../profilePage/FollowButton";

function FollowedUserCard({ followedUser }) {
  const user = useSelector((state) =>
    state.users.users.find(
      (selectedUser) => selectedUser._id === followedUser?.userId
    )
  );
  const followers = useSelector((state) =>
    state.users.users.filter(
      (user) =>
        user?.following.find(
          (follower) => follower.userId === followedUser?.userId
        )?.userId === followedUser?.userId
    )
  );

  const { profilePicture, name, banner, _id } = user;

  let followersTotal = followers.length;
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="relative h-[100px] w-[300px] rounded-md shadow-md">
      <img
        src={
          banner ||
          "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg"
        }
        alt=""
        className="h-[100px] w-full rounded-md object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-between p-3 bg-white/40">
        <img
          src={
            profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={name}
          className="w-[50px] h-[50px]  rounded-full object-cover"
        />

        <div className="">
          <Link to={`/profile/${_id}`} className="text-[18px] font-bold">
            {name}
          </Link>

          <p className="">
            {numberFormat.format(followersTotal)}{" "}
            {followersTotal === 1 ? "Follower" : "Followers"}
          </p>
        </div>

        <FollowButton otherUser={user} />
      </div>
    </div>
  );
}

export default FollowedUserCard;
