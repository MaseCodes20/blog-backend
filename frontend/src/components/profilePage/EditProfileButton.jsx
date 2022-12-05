import React from "react";
import { useDispatch } from "react-redux";
import { openEditProfileModal } from "../../features/modals/editProfileModalSlice";

function EditProfileButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="p-3 h-[36px] bg-black text-white rounded-[76px] flex items-center justify-center"
      onClick={() => dispatch(openEditProfileModal())}
    >
      Edit Profile
    </button>
  );
}

export default EditProfileButton;
