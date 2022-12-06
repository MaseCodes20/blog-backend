import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/users/usersSlice";

function FollowButton({ otherUser }) {
  const { user } = useSelector((state) => state.auth);
  const userData = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser._id === user?._id)
  );

  const dispatch = useDispatch();

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
      onClick={toggleFollow}
      className="w-[90px] h-[36px] bg-black text-white rounded-[76px] flex items-center justify-center"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
