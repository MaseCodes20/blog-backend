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
    <div className="relative h-[50px] lg:h-[100px] md:h-[80px] w-[170px] md:w-[250px] lg:w-[300px] rounded-md shadow-md">
      <img
        src={
          banner ||
          "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg"
        }
        alt=""
        className="h-[50px] lg:h-[100px] md:h-[80px] w-full rounded-md object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-between p-1 lg:p-3 bg-white/40">
        <img
          src={
            profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt={name}
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]  rounded-full object-cover"
        />

        <div className="">
          <Link
            to={`/profile/${_id}`}
            className="text-xs md:text-base lg:text-[18px] w-[60px] lg:w-fit font-bold truncate"
          >
            {name}
          </Link>

          <p className="text-[10px] md:text-[14px] w-[60px] lg:w-fit lg:text-base truncate">
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
