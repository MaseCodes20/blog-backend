import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PostMenu from "../components/postPage/PostMenu";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post?._id === postId)
  );

  const author = useSelector((state) =>
    state.users.users.find((author) => author?._id === post?.userId)
  );

  let date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="pageContainer">
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-[64px] font-semibold">{post?.title}</h1>
          <PostMenu author={author} />
        </div>

        <div className="flex items-center">
          <Link
            to={`/profile/${author?._id}`}
            className="flex items-center max-w-[204px] mr-5"
          >
            <img
              src={
                author?.profilePicture ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={author?.name}
              className="w-[20px] h-[20px] mr-[10px] object-cover "
            />
            <p>{author?.name}</p>
          </Link>

          <p>{date.toLocaleString(undefined, options)}</p>
        </div>
      </div>

      <div className="mb-10">
        <img src={post?.image} alt={post?.title} className="max-h-[304px]" />
      </div>

      <div className="mb-10">
        <p>{post?.content}</p>
      </div>

      <div className="mb-10 border-[1px] border-black p-5 ">
        <div className="mb-5 min-h-[200px] bg-gray-100">
          {post?.comments.map((comment) => {
            return <div>{comment?.comment}</div>;
          })}
        </div>

        <div>
          <label htmlFor="comment">Leave a Comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="comment...."
          />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
