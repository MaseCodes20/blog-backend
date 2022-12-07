import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset, updatePostComments } from "../../features/post/postsSlice";

function CommentInput({ post }) {
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { isError, isSuccess, message } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const submitComment = (e) => {
    e.preventDefault();

    if (comment === "") return;

    const data = {
      postData: {
        comments: [...post?.comments, { userId: user?._id, comment }],
      },
      token: user?.token,
      postId: post?._id,
    };

    dispatch(updatePostComments(data));
    setComment("");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, message]);

  return (
    <form onSubmit={submitComment} className="flex items-center p-3">
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="comment...."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="w-full mr-3"
      />

      <input
        type="submit"
        value="comment"
        className="p-2 cursor-pointer hover:bg-gray-700 bg-black text-white rounded-[76px] flex items-center justify-center"
      />
    </form>
  );
}

export default CommentInput;
