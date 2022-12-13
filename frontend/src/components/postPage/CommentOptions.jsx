import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/modals/connectModalSlice";
import { updatePostComments } from "../../features/post/postsSlice";

function CommentOptions({ userId, commentId, toggleEdit, toggleReply }) {
  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find(
        (currentComment) => currentComment._id === commentId
      )
    )
  );

  const dispatch = useDispatch();

  const deleteComment = () => {
    if (userId !== user?._id) return;

    let updatedComments = post?.comments?.filter(
      (selectedComment) => selectedComment._id !== commentId
    );

    let data = {
      postData: { comments: updatedComments },
      token: user?.token,
      postId: post?._id,
    };

    dispatch(updatePostComments(data));
  };

  return (
    <div className="">
      {user?._id === userId ? (
        <div className="flex items-center">
          <button
            onClick={() => toggleEdit()}
            className="text-sm text-gray-600 mr-3 flex items-center"
          >
            <PencilAltIcon className="h-4 mr-1" />
            <p>edit</p>
          </button>
          <button
            onClick={deleteComment}
            className="text-sm text-gray-600 mr-3 flex items-center"
          >
            <TrashIcon className="h-4 mr-1" />
            <p>delete</p>
          </button>
        </div>
      ) : (
        <button
          onClick={() => (user ? toggleReply() : dispatch(open()))}
          className="text-sm text-gray-600 mr-3"
        >
          reply
        </button>
      )}
    </div>
  );
}

export default CommentOptions;
