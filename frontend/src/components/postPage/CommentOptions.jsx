import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePostComments } from "../../features/post/postsSlice";

function CommentOptions({ userId, commentId }) {
  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find(
        (currentComment) => currentComment._id === commentId
      )
    )
  );

  const dipatch = useDispatch();

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

    dipatch(updatePostComments(data));
  };
  return (
    <div className="">
      {user?._id === userId ? (
        <div className="flex items-center">
          <button className="text-sm text-gray-600 mr-5 flex items-center">
            <PencilAltIcon className="h-4 mr-1" />
            <p>edit</p>
          </button>
          <button
            onClick={deleteComment}
            className="text-sm text-gray-600 mr-5 flex items-center"
          >
            <TrashIcon className="h-4 mr-1" />
            <p>delete</p>
          </button>
        </div>
      ) : (
        <button className="text-sm text-gray-600 mr-5">reply</button>
      )}
    </div>
  );
}

export default CommentOptions;
