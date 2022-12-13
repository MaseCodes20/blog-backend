import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/modals/connectModalSlice";
import { updatePostLikes } from "../../features/post/postsSlice";

function LikePost({ post }) {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  let userHasLiked = !!post?.likes.find(
    (currentUser) => currentUser?.userId === user?._id
  );

  const toggleLike = () => {
    let data = {
      postData: {},
      token: user?.token,
      postId: post?._id,
    };

    if (userHasLiked) {
      let updatedPostLikes = post?.likes.filter(
        (selectedLike) => selectedLike?.userId !== user?._id
      );

      data.postData.likes = updatedPostLikes;
      dispatch(updatePostLikes(data));
    } else {
      let updatedPostLikes = [...post?.likes, { userId: user?._id }];

      data.postData.likes = updatedPostLikes;
      dispatch(updatePostLikes(data));
    }
  };

  return (
    <button onClick={() => (user ? toggleLike() : dispatch(open()))}>
      <HeartIcon
        className={`h-5 px-5 ${userHasLiked && "fill-red-500 text-red-500"}`}
      />
    </button>
  );
}

export default LikePost;
