import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPostModal } from "../../features/modals/postModalSlice";
import Post from "../Post";

function ProfilePosts({ author }) {
  const posts = useSelector((state) =>
    state.posts.posts.filter((post) => post.userId === author?._id)
  );

  const dispatch = useDispatch();

  return (
    <>
      {posts.length >= 1 ? (
        <div className="grid grid-cols-2 justify-items-center gap-5 my-10">
          {posts.map((post) => {
            return (
              <Post key={post._id} postId={post._id} userId={post.userId} />
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[300px]">
          <div className="flex flex-col items-center">
            <p className="text-[18px]">
              Once you create a post, they will appear here!
            </p>
            <button
              className="pt-[7px] px-[16px] pb-[9px] bg-black hover:bg-gray-700 rounded-full mt-3 text-white font-medium"
              onClick={() => dispatch(openPostModal())}
            >
              Write
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePosts;
