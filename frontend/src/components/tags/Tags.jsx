import React from "react";
import TagCard from "./TagCard";

function Tags({ tags }) {
  const getTags = () => {
    let allTags = [];
    tags.map((tag) => {
      if (allTags.find((item) => item.name === tag)?.name === tag) {
        return allTags.map((item) => {
          if (item.name === tag) {
            return { ...item, total: item.total++ };
          } else {
            return item;
          }
        });
      } else {
        allTags.push({ name: tag, total: 1 });
      }
    });
    return allTags;
  };

  const postTags = tags && getTags();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center my-10">
      {postTags?.map((tag, index) => {
        return <TagCard key={index} tag={tag} />;
      })}
    </div>
  );
}

export default Tags;
