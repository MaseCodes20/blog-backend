import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "../../profilePage/FollowButton";

function SuggestedBlogs() {
  const { user } = useSelector((state) => state.auth);
  const users = useSelector((state) =>
    state.users.users.filter((selectedUser) => selectedUser._id !== user?._id)
  );

  let randomUsers = users
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 4);

  return (
    <div>
      {randomUsers?.map((suggestUser) => {
        return (
          <div key={suggestUser?._id} className="flex items-center mb-3">
            <Link
              to={`profile/${suggestUser?._id}`}
              className="flex flex-1 items-center"
            >
              <img
                src={
                  suggestUser?.profilePicture ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt={suggestUser?.name}
                className="w-[40px] h-[40px] mr-[10px] rounded-full object-cover"
              />

              <div>
                <p className="text-sm ">{suggestUser?.name}</p>
                <p className="text-xs text-gray-700 ">
                  {suggestUser?.username}
                </p>
              </div>
            </Link>

            <FollowButton otherUser={suggestUser} />
          </div>
        );
      })}
    </div>
  );
}

export default SuggestedBlogs;
