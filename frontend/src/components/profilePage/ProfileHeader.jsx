import React from "react";
import { useSelector } from "react-redux";
import EditProfileButton from "./EditProfileButton";
import FollowButton from "./FollowButton";

function ProfileHeader({ author }) {
  const { user } = useSelector((state) => state.auth);
  const userProfile = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser._id === author?._id)
  );

  const followers = useSelector((state) =>
    state.users.users.filter(
      (user) =>
        user?.following.find((follower) => follower.userId === userProfile?._id)
          ?.userId === userProfile?._id
    )
  );

  let followerTotal = followers.length;
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <>
      <div className="w-full h-[206px]  bg-gray-200">
        <img
          src={
            userProfile?.banner ||
            "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg"
          }
          alt={userProfile?.name}
          className="object-cover h-[206px] w-full"
        />
      </div>

      <div className="flex items-center justify-between my-5">
        <div className="flex items-center">
          <img
            src={
              userProfile?.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt={userProfile?.name}
            className="w-[80px] h-[80px] mr-[10px] rounded-full object-cover"
          />

          <div>
            <h3 className="text-[24px] font-semibold">{userProfile?.name}</h3>
            <p className="text-sm">
              {numberFormat.format(followerTotal)}{" "}
              {followerTotal === 1 ? "Follower" : "Followers"}
            </p>
          </div>
        </div>

        <div>
          {user?._id !== userProfile?._id ? (
            <FollowButton otherUser={userProfile} />
          ) : (
            <EditProfileButton />
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
