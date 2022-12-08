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
      {userBookmarks?.length < 1 ? (
        <div className="flex items-center justify-center">
          <p>Once you bookmark a post, you'll see them here</p>
        </div>
      ) : (
        <>
          {sortedBookmarks?.map((bookmarks) => {
            return (
              <Post
                key={bookmarks.postId}
                postId={bookmarks.postId}
                userId={user._id}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default Bookmarks;
