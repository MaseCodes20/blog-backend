import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditProfileModal } from "../../../features/modals/editProfileModalSlice";
import CloseModalButton from "../CloseModalButton";
import EditProfileFrom from "./EditProfileFrom";

function EditProfileModal() {
  const { user } = useSelector((state) => state.auth);
  const loggedInUser = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser?._id === user?._id)
  );
  const { isEditProfileModalOpen } = useSelector(
    (state) => state.editProfileModal
  );

  const dispatch = useDispatch();
  const editProfileModalRef = useRef();

  const closeModal = (e) => {
    if (editProfileModalRef.current === e.target) {
      dispatch(closeEditProfileModal());
    }
  };

  const closeButton = () => {
    dispatch(closeEditProfileModal());
  };

  return (
    <>
      {isEditProfileModalOpen && (
        <div
          ref={editProfileModalRef}
          onClick={closeModal}
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20"
        >
          <div className="relative w-full h-full md:w-[560px] md:h-[600px] flex justify-center items-center text-center py-[44px] px-[56px] bg-white shadow-lg">
            <CloseModalButton closeFunction={closeButton} />

            <EditProfileFrom user={loggedInUser} />
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfileModal;
