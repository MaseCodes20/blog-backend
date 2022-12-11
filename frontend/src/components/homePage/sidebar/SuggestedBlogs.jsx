import React from "react";
import SuggestedBlog from "./SuggestedBlog";

function SuggestedBlogs({ suggestedUsers }) {
  return (
    <div>
      {suggestedUsers?.map((suggestUser) => {
        return (
          <SuggestedBlog key={suggestUser?._id} suggestUser={suggestUser} />
        );
      })}
    </div>
  );
}

export default SuggestedBlogs;
