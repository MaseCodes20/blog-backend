import React from "react";
import FollowedUserCard from "./FollowedUserCard";

function UsersFollowingList({ following }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 my-5">
      {following?.map((followedUser) => {
        return (
          <FollowedUserCard
            key={followedUser._id}
            followedUser={followedUser}
          />
        );
      })}
    </div>
  );
}

export default UsersFollowingList;
