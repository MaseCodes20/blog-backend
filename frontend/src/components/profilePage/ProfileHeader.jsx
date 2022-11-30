import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="w-full h-[206px] flex items-center justify-center bg-gray-200">
        <h3>Banner</h3>
      </div>

      <div className="flex items-center justify-between my-5">
        <div className="flex items-center">
          <img
            src={
              user.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt={user.name}
            className="w-[80px] h-[80px] mr-[10px] rounded-full object-cover"
          />

          <div>
            <h3 className="text-[24px] font-semibold">{user.name}</h3>
            <p className="text-sm">1,000 followers</p>
          </div>
        </div>

        <div>
          {user.id === user.id && (
            <button className="w-[90px] h-[36px] bg-black text-white rounded-[76px] flex items-center justify-center">
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
