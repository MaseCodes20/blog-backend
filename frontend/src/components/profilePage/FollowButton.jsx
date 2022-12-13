import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { open } from "../../features/modals/connectModalSlice";
import { updateUser } from "../../features/users/usersSlice";

function FollowButton({ otherUser }) {
  const { user } = useSelector((state) => state.auth);
  const userData = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser._id === user?._id)
  );

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  let isFollowing = !!userData?.following.find(
    (user) => user?.userId === otherUser?._id
  )?.userId;

  const toggleFollow = () => {
    let following = [...userData?.following];

    let data = {
      userData: {
        following,
      },
      token: user?.token,
      userId: user?._id,
    };

    if (
      userData?.following.find((user) => user?.userId === otherUser?._id)
        ?.userId === otherUser?._id
    ) {
      const newFollowingList = userData?.following.filter(
        (follower) => follower.userId !== otherUser?._id
      );
      data.userData.following = newFollowingList;
      dispatch(updateUser(data));
    } else {
      data.userData.following = [...following, { userId: otherUser?._id }];
      dispatch(updateUser(data));
    }
  };

  return (
    <button
      onClick={() => (user ? toggleFollow() : dispatch(open()))}
      className={`${
        location === "/"
          ? "w-[48px] h-[18px] md:text-[10px] "
          : "w-[48px] h-[18px] md:w-[70px] md:h-[30px] lg:w-[90px] lg:h-[36px]"
      } w-[48px] h-[18px] lg:w-[90px] lg:h-[36px] text-[10px] md:text-sm lg:text-base bg-black hover:bg-gray-700 text-white rounded-[76px] flex items-center justify-center`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
