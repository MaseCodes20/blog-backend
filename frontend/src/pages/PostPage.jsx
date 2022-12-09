import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CommentInput from "../components/postPage/CommentInput";
import LikePost from "../components/postPage/LikePost";
import PostComments from "../components/postPage/PostComments";
import PostMenu from "../components/postPage/PostMenu";
import Tags from "../components/tags/Tags";
import { clearSearchTag } from "../features/search/SearchTagSlice";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const postFound = useSelector((state) =>
    state.posts.posts.find((post) => post?._id === postId)
  );

  const dispatch = useDispatch();

  const author = useSelector((state) =>
    state.users.users.find((author) => author?._id === postFound?.userId)
  );

  let date = new Date(postFound?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const paragraphs = postFound?.content.split(/\r?\n|\r|\n/g);

  let totalLikes = postFound?.likes.length;
  const numberFormat = new Intl.NumberFormat("en-US");

  useEffect(() => {
    dispatch(clearSearchTag());
  }, []);

  return (
    <div className="pageContainer">
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-[64px] font-semibold">{postFound?.title}</h1>
          <div className="flex items-center">
            <LikePost post={postFound} />
            <PostMenu post={postFound} author={author} />
          </div>
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

          <p className="mr-5">{date.toLocaleString(undefined, options)}</p>

          {totalLikes >= 1 && (
            <p className="text-gray-600 mr-3">
              {numberFormat.format(totalLikes)}{" "}
              {totalLikes === 1 ? "like" : "likes"}
            </p>
          )}
        </div>
      </div>

      <div className="mb-10">
        <img
          src={postFound?.image}
          alt={postFound?.title}
          className="max-h-[304px]"
        />
      </div>

      <div className="mb-10">
        {paragraphs?.map((paragraph, index) => {
          return (
            <div key={index}>
              <p className="mb-10">{paragraph}</p>
            </div>
          );
        })}
      </div>

      <div className="mb-10">
        <Tags tags={postFound?.tags} />
      </div>

      <div className="mb-10 border-[1px] border-black p-5 ">
        <PostComments post={postFound} />

        <CommentInput post={postFound} />
      </div>
    </div>
  );
}

export default PostPage;
