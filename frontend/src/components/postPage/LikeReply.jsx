import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/modals/connectModalSlice";
import { updatePostComments } from "../../features/post/postsSlice";

function LikeReply({ reply }) {
  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find((currentComment) =>
        currentComment.replies.find(
          (currentReply) => currentReply?._id === reply?._id
        )
      )
    )
  );

  const dispatch = useDispatch();

  let userHasLiked = !!reply?.likes.find(
    (currentUser) => currentUser?.userId === user?._id
  );

  const toggleLike = () => {
    let data = {
      postData: {},
      token: user?.token,
      postId: post?._id,
    };

    if (userHasLiked) {
      let updatedCommentReplyLikes = post?.comments?.map((comment) => {
        if (comment?.replies.find((selected) => selected?._id === reply?._id)) {
          return {
            ...comment,
            replies: comment?.replies.map((selectedReply) => {
              if (selectedReply?._id === reply?._id) {
                return {
                  ...selectedReply,
                  likes: selectedReply?.likes.filter(
                    (like) => like?.userId !== user?._id
                  ),
                };
              } else {
                return selectedReply;
              }
            }),
          };
        } else {
          return comment;
        }
      });

      data.postData.comments = updatedCommentReplyLikes;
      dispatch(updatePostComments(data));
    } else {
      let commentsCopy = post?.comments?.map((comment) => {
        if (comment?.replies.find((selected) => selected?._id === reply?._id)) {
          return {
            ...comment,
            replies: comment?.replies.map((selectedReply) => {
              if (selectedReply?._id === reply?._id) {
                return {
                  ...selectedReply,
                  likes: [...selectedReply.likes, { userId: user?._id }],
                };
              } else {
                return selectedReply;
              }
            }),
          };
        } else {
          return comment;
        }
      });

      data.postData.comments = commentsCopy;
      dispatch(updatePostComments(data));
    }
  };
  return (
    <button onClick={() => (user ? toggleLike() : dispatch(open()))}>
      <HeartIcon
        className={`h-4 px-5 ${userHasLiked && "fill-red-500 text-red-500"}`}
      />
    </button>
  );
}

export default LikeReply;
