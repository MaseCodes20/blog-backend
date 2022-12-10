import React from "react";
import SuggestedBlog from "./SuggestedBlog";

function SuggestedBlogs({ suggestedUsers }) {
  return (
    <div>
      {suggestedUsers?.map((suggestUser) => {
        return <SuggestedBlog suggestUser={suggestUser} />;
      })}
    </div>
  );
}

export default SuggestedBlogs;
