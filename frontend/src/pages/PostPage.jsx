import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post._id === postId)
  );

  const user = useSelector((state) =>
    state.users.users.find((user) => user._id === post.userId)
  );

  let date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  console.log(post);
  return (
    <div className="pageContainer">
      <div className="mb-10">
        <h1 className="text-[64px] font-semibold">{post.title}</h1>

        <div className="flex items-center">
          <div className="flex items-center max-w-[204px] mr-5">
            <img
              src={
                user?.profilePicture ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={user?.name}
              className="w-[20px] h-[20px] mr-[10px] object-cover "
            />
            <p>{user?.name}</p>
          </div>

          <p>{date.toLocaleString(undefined, options)}</p>
        </div>
      </div>

      <div className="mb-10">
        <img src={post.image} alt={post.title} className="max-h-[304px]" />
      </div>

      <div className="mb-10">
        <p>{post.content}</p>
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
