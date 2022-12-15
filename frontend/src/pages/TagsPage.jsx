import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import TaggedPosts from "../components/tags/TaggedPosts";
import Tags from "../components/tags/Tags";

function TagsPage() {
  const { searchTag } = useSelector((state) => state.searchTag);
  const { posts } = useSelector((state) => state.posts);

  const tags = useSelector((state) =>
    state.posts.posts.map((post) => post.tags)
  )
    .join()
    .split(",");

  return (
    <div className="pageContainer">
      <div className="contentWrapper">
        <h1 className="pageTitle">Tags</h1>

        <Tags tags={tags} />

        {/* Posts */}
        <TaggedPosts searchTag={searchTag} posts={posts} />
      </div>

      <Footer />
    </div>
  );
}

export default TagsPage;
