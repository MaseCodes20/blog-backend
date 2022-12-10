import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post({ postId }) {
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post._id === postId)
  );

  const author = useSelector((state) =>
    state.users.users.find((user) => user._id === post?.userId)
  );

  let date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <>
      {post && (
        <Link
          to={`/post/${post?._id}`}
          className="flex items-center w-full truncate shadow-md"
        >
          {post?.image ? (
            <img
              src={post?.image}
              alt={post?.title}
              className="w-[200px] h-[134px] object-cover"
            />
          ) : (
            <div className="w-[200px] h-[134px] bg-gray-200 flex items-center justify-center">
              <p className="uppercase">{post?.title}</p>
            </div>
          )}

          <div className="mx-5 w-fit truncate">
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

            <h1 className="text-[28px] w-[240px] font-semibold truncate">
              {post?.title}
            </h1>

            <p className="text-[20px] truncate w-full">{post?.content}</p>

            {post?.createdAt && (
              <p>{date.toLocaleString(undefined, options)}</p>
            )}
          </div>
        </Link>
      )}
    </>
  );
}

export default Post;
