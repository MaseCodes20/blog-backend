import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePostComments } from "../../features/post/postsSlice";

function EditCommentForm({ comment, toggleEdit }) {
  const [editedComment, setEditedComment] = useState(comment.comment);

  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find(
        (currentComment) => currentComment._id === comment?._id
      )
    )
  );

  const dispatch = useDispatch();

  const submitEditedComment = (e) => {
    e.preventDefault();

    if (comment?.userId !== user?._id && comment.comment === editedComment)
      return;

    let updatedComments = post?.comments?.map((selectedComment) => {
      if (selectedComment?._id === comment?._id) {
        return { ...selectedComment, comment: editedComment };
      } else {
        return selectedComment;
      }
    });

    let data = {
      postData: { comments: updatedComments },
      token: user?.token,
      postId: post?._id,
    };

    dispatch(updatePostComments(data));
    toggleEdit();
  };

  return (
    <form onSubmit={submitEditedComment} className="flex-1 flex bg-white pr-3">
      <input
        type="text"
        name="comment"
        id="comment"
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        className=" w-full"
      />
      <input type="submit" hidden value="update" />
    </form>
  );
}

export default EditCommentForm;
