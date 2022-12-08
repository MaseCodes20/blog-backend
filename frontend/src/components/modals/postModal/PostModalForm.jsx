import { CameraIcon } from "@heroicons/react/outline";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, reset } from "../../../features/post/postsSlice";
import { toast } from "react-toastify";
import { closePostModal } from "../../../features/modals/postModalSlice";
import { useNavigate } from "react-router-dom";

function PostModalForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayedImage, setDisplayedImage] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const [tags, setTags] = useState([]);

  const { title, content } = inputs;

  const { user } = useSelector((state) => state.auth);
  const { isError, isSuccess, newPost, message } = useSelector(
    (state) => state.posts
  );

  const filePickerRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategories = (e) => {
    setTags(e.target.value.split(","));
  };

  const getImageUrl = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
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
      setSelectedImage(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setDisplayedImage(readerEvent.target.result);
    };
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let data = {
      postData: {
        userId: user._id,
        title: title,
        content: content,
      },
      token: user.token,
    };

    if (tags.length >= 1) {
      data.postData.tags = tags;
    }

    if (selectedImage) {
      const imageURL = await getImageUrl();
      data.postData.image = imageURL;
      dispatch(addPost(data));
    } else {
      dispatch(addPost(data));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && newPost) {
      navigate("/profile");
      dispatch(closePostModal());
    }

    dispatch(reset());
  }, [message, isError, isSuccess, dispatch, navigate]);

  return (
    <form className="my-5 w-full h-full" onSubmit={submitForm}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-left text-[13px]">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      {displayedImage ? (
        <img
          src={displayedImage}
          className="w-full h-[150px] object-contain mb-2 cursor-pointer"
          alt=""
          onClick={() => setDisplayedImage(null)}
        />
      ) : (
        <div
          className="w-full h-[150px] bg-gray-100 flex items-center justify-center cursor-pointer mb-2"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-10 w-10 text-red-600" aria-hidden="true" />
        </div>
      )}

      <input
        type="file"
        name="image"
        id="image"
        ref={filePickerRef}
        onChange={addImageToPost}
        hidden
      />

      <div className="flex flex-col mb-2">
        <label htmlFor="content" className="text-left text-[13px]">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          onChange={handleChange}
          className="border p-2 border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black h-[200px] box-border resize-none"
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="tags" className="text-left text-[13px]">
          Tags <span className="text-[10px]">(separate tags by a comma)</span>
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          onChange={handleCategories}
          className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      <div className="relative">
        <input
          type="submit"
          value="Post"
          className="absolute right-0 pt-[7px] px-[16px] pb-[9px] bg-black rounded-full text-white font-medium cursor-pointer"
        />
      </div>
    </form>
  );
}

export default PostModalForm;
