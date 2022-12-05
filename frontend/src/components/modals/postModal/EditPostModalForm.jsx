import { CameraIcon } from "@heroicons/react/outline";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, updatePost } from "../../../features/post/postsSlice";
import { toast } from "react-toastify";
import { closePostModal } from "../../../features/modals/postModalSlice";
import { useNavigate } from "react-router-dom";

function EditPostModalForm({ post }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [postImage, setPostImage] = useState(post?.image);
  const [displayedImage, setDisplayedImage] = useState("");
  const [postTitle, setPostTitle] = useState(post?.title);
  const [postContent, setPostContent] = useState(post?.content);
  const [categories, setCategpries] = useState(post?.categories);

  const { user } = useSelector((state) => state.auth);
  const { isError, isSuccess, newPost, message } = useSelector(
    (state) => state.posts
  );

  const filePickerRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategories = (e) => {
    setCategpries(e.target.value.split(","));
  };

  const allAreEqual = (array) => {
    const result = array.map((element, index) => {
      if (element.includes(post?.categories[index])) {
        return true;
      } else {
        return false;
      }
    });
    return result.every((item) => item === true);
  };

  let isCategoriesEqual = allAreEqual(categories);

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
      postData: {},
      postId: post?._id,
      token: user?.token,
    };

    if (postTitle !== post?.title) {
      data.postData.title = postTitle;
    }

    if (postContent !== post?.content) {
      data.postData.content = postContent;
    }

    if (!isCategoriesEqual) {
      data.postData.categories = categories;
    }

    if (selectedImage) {
      const imageURL = await getImageUrl();
      data.postData.image = imageURL;
      dispatch(updatePost(data));
    } else {
      dispatch(updatePost(data));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
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
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
          className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      {displayedImage || postImage ? (
        <img
          src={displayedImage || postImage}
          className="w-full h-[150px] object-contain mb-2 cursor-pointer"
          alt={post?.title}
          onClick={() => {
            setDisplayedImage(null);
            setPostImage(null);
          }}
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
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
          className="border p-2 border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black h-[200px] box-border resize-none"
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="categories" className="text-left text-[13px]">
          Categories{" "}
          <span className="text-[10px]">(separate categories by a comma)</span>
        </label>
        <input
          type="text"
          name="categories"
          id="categories"
          onChange={handleCategories}
          value={categories}
          className="border border-gray-300 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
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

export default EditPostModalForm;
