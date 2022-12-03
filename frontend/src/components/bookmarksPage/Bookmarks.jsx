import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post";

function Bookmarks({ bookmarkId }) {
  const { user } = useSelector((state) => state.auth);
  const userBookMarks = useSelector(
    (state) =>
      state.users.users.find((currentUser) => currentUser._id === user._id)
        ?.bookmarks
  );

  return (
    <>
      {userBookMarks.length >= 1 && (
        <>
          {userBookMarks?.map((bookmarks) => {
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
