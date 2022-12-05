import { CameraIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { closeEditProfileModal } from "../../../features/modals/editProfileModalSlice";
import { reset, updateUser } from "../../../features/users/usersSlice";

function EditProfileFrom({ user }) {
  const [selectedBannerImage, setSelectedBannerImage] = useState(null);
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const [profileBanner, setProfileBanner] = useState(user?.banner);
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture);
  const [bannerImage, setBannerImage] = useState("");
  const [displayProfilePicture, setDisplayProfilePicture] = useState("");
  const [userFullName, setUserFullName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username ?? "");
  const [userBio, setUserBio] = useState(user?.bio);

  const { user: userAuth } = useSelector((state) => state.auth);
  const { isError, isSuccess, message } = useSelector((state) => state.users);
  const userName = useSelector((state) =>
    state.users.users.find((currentUser) => currentUser.username === username)
  );

  const profilePicPickerRef = useRef();
  const bannerPickerRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let usernameExists = !!userName;

  const getImageUrl = async () => {
    const formData = new FormData();
    formData.append("file", selectedBannerImage);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_KEY);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
        formData
      );

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const getProfilePictureUrl = async () => {
    const formData = new FormData();
    formData.append("file", selectedProfilePicture);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_KEY);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
        formData
      );

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setSelectedProfilePicture(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setDisplayProfilePicture(readerEvent.target.result);
    };
  };

  const addBannerToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setSelectedBannerImage(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setBannerImage(readerEvent.target.result);
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let data = {
      userData: {},
      token: userAuth?.token,
      userId: userAuth?._id,
    };

    if (userFullName !== user?.name) {
      data.userData.name = userFullName;
    }

    if (username !== (user?.username ?? "") && !usernameExists) {
      data.userData.username = username;
    }

    if (userBio !== user?.bio) {
      data.userData.bio = userBio;
    }

    if (selectedProfilePicture) {
      const imageURL = await getProfilePictureUrl();
      data.userData.profilePicture = imageURL;
    }

    if (selectedBannerImage) {
      const imageURL = await getImageUrl();
      data.userData.banner = imageURL;
      dispatch(updateUser(data));
    }

    console.log(data);
    dispatch(updateUser(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(closeEditProfileModal());
    }

    dispatch(reset());
  }, [message, isError, isSuccess, dispatch, navigate]);

  return (
    <form className="my-5 w-full h-full" onSubmit={submitForm}>
      <div className="flex justify-between">
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="text-left text-[13px]">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setUserFullName(e.target.value)}
            value={userFullName}
            className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black mb-2"
          />

          <label htmlFor="username" className="text-left text-[13px]">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
          />

          <div className="h-[20px]">
            {usernameExists && username !== user?.username && (
              <p className="text-red-600 text-left text-[13px]">
                Username already exists!
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] mb-1">Profile Picture</h3>
          {displayProfilePicture || profilePicture ? (
            <img
              src={displayProfilePicture || profilePicture}
              className="w-[80px] rounded-full object-cover h-[80px] mb-2 cursor-pointer"
              alt={user?.name}
              onClick={() => {
                setDisplayProfilePicture(null);
                setProfilePicture(null);
              }}
            />
          ) : (
            <div
              className="w-[80px] rounded-full object-cover h-[80px] bg-gray-100 flex items-center justify-center cursor-pointer mb-2"
              onClick={() => profilePicPickerRef.current.click()}
            >
              <CameraIcon
                className="h-10 w-10 text-red-600"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-[13px] text-left mb-1">Profile Banner</h3>
        {bannerImage || profileBanner ? (
          <img
            src={bannerImage || profileBanner}
            className="w-full h-[150px] object-contain mb-2 cursor-pointer"
            alt={user?.name}
            onClick={() => {
              setBannerImage(null);
              setProfileBanner(null);
            }}
          />
        ) : (
          <div
            className="w-full h-[150px] bg-gray-100 flex items-center justify-center cursor-pointer mb-2"
            onClick={() => bannerPickerRef.current.click()}
          >
            <CameraIcon className="h-10 w-10 text-red-600" aria-hidden="true" />
          </div>
        )}
      </div>

      <input
        type="file"
        name="profilePicture"
        id="profilePicture"
        ref={profilePicPickerRef}
        onChange={addImageToPost}
        hidden
      />

      <input
        type="file"
        name="banner"
        id="banner"
        ref={bannerPickerRef}
        onChange={addBannerToPost}
        hidden
      />

      <div className="flex flex-col mb-2">
        <label htmlFor="bio" className="text-left text-[13px]">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          onChange={(e) => setUserBio(e.target.value)}
          value={userBio}
          className="border p-2 border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black h-[150px] box-border resize-none"
        />
      </div>

      <div className="relative">
        <input
          type="submit"
          value="Update"
          className="absolute right-0 pt-[7px] px-[16px] pb-[9px] bg-black rounded-full text-white font-medium cursor-pointer"
        />
      </div>
    </form>
  );
}

export default EditProfileFrom;
