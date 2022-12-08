import React from "react";
import { useSelector } from "react-redux";
import TagCard from "./TagCard";

function Tags() {
  const tags = useSelector((state) =>
    state.posts.posts.map((post) => post.tags)
  )
    .join()
    .split(",");

  const getTags = () => {
    let Tags = [];
    [...tags].map((category) => {
      if (Tags.find((item) => item.name === category)?.name === category) {
        return Tags.map((item) => {
          if (item.name === category) {
            return { ...item, total: item.total++ };
          } else {
            return item;
          }
        });
      } else {
        Tags.push({ name: category, total: 1 });
      }
    });
    return Tags;
  };

  const postTags = getTags();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center my-10">
      {postTags?.map((tag, index) => {
        return <TagCard key={index} tag={tag} />;
      })}
    </div>
  );
}

export default Tags;
