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
          className="md:flex items-center w-full truncate shadow-md"
        >
          {post?.image ? (
            <img
              src={post?.image}
              alt={post?.title}
              className="w-full md:w-[200px] h-[134px] object-cover"
            />
          ) : (
            <div className="w-[200px] h-[134px] bg-gray-200 flex items-center justify-center">
              <p className="uppercase">{post?.title}</p>
            </div>
          )}

          <div className="my-3 md:my-0 mx-2 md:mx-5 w-fit truncate">
            <div className="flex items-center">
              <img
                src={
                  author?.profilePicture ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt={author?.name}
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mr-[10px] rounded-full object-cover "
              />
              <h3 className="text-sm">{author?.name}</h3>
            </div>

            <h1 className="text-[20px] md:text-[28px] w-[240px] font-semibold truncate">
              {post?.title}
            </h1>

            <p className="text-sm md:text-[20px] truncate max-w-[280px] md:w-full">
              {post?.content}
            </p>

            {post?.createdAt && (
              <p className="text-xs md:text-base">
                {date.toLocaleString(undefined, options)}
              </p>
            )}
          </div>
        </Link>
      )}
    </>
  );
}

export default Post;
