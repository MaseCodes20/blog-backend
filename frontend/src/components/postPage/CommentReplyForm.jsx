import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePostComments } from "../../features/post/postsSlice";

function CommentReplyForm({ comment, toggleReply }) {
  const [commentReply, setCommentReply] = useState("");

  const { user } = useSelector((state) => state.auth);
  const post = useSelector((state) =>
    state.posts.posts.find((currentPost) =>
      currentPost.comments.find(
        (currentComment) => currentComment._id === comment?._id
      )
    )
  );

  const dispatch = useDispatch();

  const submitReply = (e) => {
    e.preventDefault();

    if (commentReply === "") return;

    const updatedComments = post?.comments?.map((selectedComment) => {
      if (selectedComment?._id === comment?._id) {
        return {
          ...selectedComment,
          replies: selectedComment?.replies
            ? [
                ...selectedComment?.replies,
                { userId: user?._id, comment: commentReply },
              ]
            : [{ userId: user?._id, comment: commentReply }],
        };
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
    toggleReply();
  };

  return (
    <form onSubmit={submitReply} className="flex items-center px-3 py-1">
      <input
        type="text"
        name="comment"
        id="comment"
        className="flex-1"
        value={commentReply}
        onChange={(e) => setCommentReply(e.target.value)}
      />
      <input
        type="submit"
        value="submit"
        className="p-1 ml-3 text-[10px] cursor-pointer hover:bg-gray-700 bg-black text-white rounded-[76px] flex items-center justify-center"
      />
    </form>
  );
}

export default CommentReplyForm;
