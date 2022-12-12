import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LikePost from "../../postPage/LikePost";
import FollowButton from "../../profilePage/FollowButton";

function SuggestedPost({ post }) {
  const author = useSelector((state) =>
    state.users.users.find((user) => user._id === post?.userId)
  );

  let totalLikes = post?.likes?.length;
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <>
      <div className="flex items-center p-2 rounded-t-md bg-gray-200">
        <Link
          to={`profile/${author?._id}`}
          className="flex flex-1 items-center"
        >
          <img
            src={
              author?.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt={author?.name}
            className="w-[20px] h-[20px] mr-[10px] rounded-full object-cover "
          />
          <h3>{author?.name}</h3>
        </Link>

        <FollowButton otherUser={author} />
      </div>

      <Link to={`post/${post?._id}`}>
        {post?.image ? (
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-[134px] object-cover"
          />
        ) : (
          <div className="w-full h-[134px] bg-gray-200 flex items-center justify-center">
            <p className="uppercase">{post?.title}</p>
          </div>
        )}
      </Link>
    </>
  );
}

export default SuggestedPost;
