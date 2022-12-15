import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL, POSTS_ROUTE } from "../../../api/config";
import SuggestedPost from "./SuggestedPost";

function SuggestedPostSection() {
  const [suggestedPost, setSuggestedPost] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchRandomPost = async () => {
      try {
        const response = await axios.get(`${API_URL}${POSTS_ROUTE}`, {
          signal,
        });
        const suggestedPost = response.data
          ?.filter((selectedPost) => selectedPost.userId !== user?._id)
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)[0];

        setSuggestedPost(suggestedPost);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch Suggested Blogs cancelled!");
        } else {
          console.log(error.message);
        }
      }

      return () => {
        controller.abort();
      };
    };

    fetchRandomPost();
  }, [user?._id]);

  return (
    <div className="w-full p-3 mb-5">
      <h2 className="font-semibold text-[20px] mb-3">Radar</h2>

      {/* Post */}

      <SuggestedPost post={suggestedPost} />
    </div>
  );
}

export default SuggestedPostSection;
