import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, reset } from "../../features/post/postsSlice";
import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/outline";

function DeletePostButton(props) {
  const { user } = useSelector((state) => state.auth);
  const { isSuccess, isError, message, deletedPost } = useSelector(
    (state) => state.posts
  );

  console.log(props);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removePost = () => {
    const data = {
      postId: props.postId,
      token: user?.token,
    };

    dispatch(deletePost(data));
    navigate("/profile");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && deletedPost) {
      navigate("/profile");
    }

    dispatch(reset());
  }, [isSuccess, isError, message, deletedPost, dispatch, navigate]);

  return (
    <button
      onClick={removePost}
      className={`${props.active} group flex w-full items-center px-2 py-2 text-sm`}
    >
      <TrashIcon className="h-5 mr-5" /> Delete
    </button>
  );
}

export default DeletePostButton;
