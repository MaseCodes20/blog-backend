import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import CommentInput from "../components/postPage/CommentInput";
import PostComments from "../components/postPage/PostComments";
import PostMenu from "../components/postPage/PostMenu";
import TagCard from "../components/tags/TagCard";
import Tags from "../components/tags/Tags";
import { findPost } from "../features/post/postsSlice";
import { clearSearchTag } from "../features/search/SearchTagSlice";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const postFound = useSelector((state) =>
    state.posts.posts.find((post) => post?._id === postId)
  );
  const { post: pagePost } = useSelector((state) => state.posts);

  let post = postFound || (pagePost && pagePost[0]);

  const dispatch = useDispatch();

  const author = useSelector((state) =>
    state.users.users.find((author) => author?._id === post?.userId)
  );

  let date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const paragraphs = post?.content.split(/\r?\n|\r|\n/g);

  useEffect(() => {
    if (!postFound) {
      dispatch(findPost(postId));
    }

    dispatch(clearSearchTag());
  }, [postFound, postId]);

  return (
    <div className="pageContainer">
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-[64px] font-semibold">{post?.title}</h1>
          <PostMenu post={post} author={author} />
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
        {paragraphs?.map((paragraph, index) => {
          return (
            <div key={index}>
              <p className="mb-10">{paragraph}</p>
            </div>
          );
        })}
      </div>

      <div className="mb-10">
        <Tags tags={post?.tags} />
      </div>

      <div className="mb-10 border-[1px] border-black p-5 ">
        <PostComments post={post} />

        <CommentInput post={post} />
      </div>
    </div>
  );
}

export default PostPage;
