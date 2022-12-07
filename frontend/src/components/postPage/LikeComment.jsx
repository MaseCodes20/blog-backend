import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePostComments } from "../../features/post/postsSlice";

function LikeComment({ comment }) {
  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find(
        (currentComment) => currentComment._id === comment._id
      )
    )
  );

  const dispatch = useDispatch();

  let userHasLiked = !!comment.likes.find(
    (currentUser) => currentUser?.userId === user?._id
  );

  const toggleLike = () => {
    let data = {
      postData: {},
      token: user?.token,
      postId: post?._id,
    };

    if (userHasLiked) {
      let updatedCommentsLikes = post?.comments?.map((selectedComment) => {
        if (selectedComment?._id === comment?._id) {
          return {
            ...selectedComment,
            likes: selectedComment?.likes.filter(
              (like) => like?.userId !== user?._id
            ),
          };
        } else {
          return selectedComment;
        }
      });

      data.postData.comments = updatedCommentsLikes;
      dispatch(updatePostComments(data));
    } else {
      let commentsCopy = post?.comments?.map((selectedComment) => {
        if (selectedComment?._id === comment?._id) {
          return {
            ...selectedComment,
            likes: [...selectedComment.likes, { userId: user?._id }],
          };
        } else {
          return selectedComment;
        }
      });

      data.postData.comments = commentsCopy;
      dispatch(updatePostComments(data));
    }
  };
  return (
    <button onClick={toggleLike}>
      <HeartIcon
        className={`h-4 px-5 ${userHasLiked && "fill-red-500 text-red-500"}`}
      />
    </button>
  );
}

export default LikeComment;
