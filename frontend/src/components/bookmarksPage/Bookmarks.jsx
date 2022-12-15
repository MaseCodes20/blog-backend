import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post";

function Bookmarks() {
  const { user } = useSelector((state) => state.auth);
  const userBookmarks = useSelector(
    (state) =>
      state.users.users.find((currentUser) => currentUser._id === user._id)
        ?.bookmarks
  );

  const sortedBookmarks =
    userBookmarks &&
    [...userBookmarks]?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <>
      {" "}
      {userBookmarks?.length < 1 ? (
        <div className="flex items-center justify-center w-full h-[300px]">
          <p>Once you bookmark a post, you'll see them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-l md:grid-cols-2 justify-items-center my-10 gap-5">
          {sortedBookmarks?.map((bookmarks) => {
            return (
              <Post
                key={bookmarks.postId}
                postId={bookmarks.postId}
                userId={user._id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Bookmarks;
