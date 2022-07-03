import React from "react";

export const PostsFilter = ({ setFilter, setShowFilter }) => {
  return (
    <div className="bg-white rounded-lg text-black px-4 py-2 absolute right-0 top-7 z-10">
      <button
        onClick={() => {
          setFilter("latestPosts");
          setShowFilter((prev) => !prev);
        }}
      >
        Latest
      </button>
      <hr />
      <button
        onClick={() => {
          setFilter("oldestPosts");
          setShowFilter((prev) => !prev);
        }}
      >
        Oldest
      </button>
      <hr />
      <button
        onClick={() => {
          setFilter("trendingPosts");
          setShowFilter((prev) => !prev);
        }}
      >
        Trending
      </button>
    </div>
  );
};
