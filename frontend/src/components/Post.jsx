import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post({ post, userId }) {
  const author = useSelector((state) =>
    state.users.users.find((user) => user._id === userId)
  );

  let date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <Link to={`/post/${post._id}`} className="flex items-center shadow-md">
      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          className="w-[200px] h-[134px] object-cover mr-5"
        />
      ) : (
        <div className="w-[200px] h-[134px] bg-gray-200 flex items-center justify-center mr-5">
          <p className="uppercase">{post.title}</p>
        </div>
      )}

      <div>
        <div className="flex items-center">
          <img
            src={
              author?.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt={author?.name}
            className="w-[20px] h-[20px] mr-[10px] rounded-full object-cover "
          />
          <h3>{author?.name}</h3>
        </div>

        <h1 className="text-[28px] font-semibold">{post.title}</h1>

        <p className="w-[240px] text-[20px] truncate">{post.content}</p>

        <p>{date.toLocaleString(undefined, options)}</p>
      </div>
    </Link>
  );
}

export default Post;
