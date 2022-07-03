import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../Post/Post";
import { getPostsByUser, getPostsData } from "../../thunks/postsThunks";
import { PostsFilter } from "../PostsFilter/PostsFilter";

export const Posts = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("latestPosts");
  const [showFilter, setShowFilter] = useState(false);
  const { posts, userPosts } = useSelector((state) => state.posts);
  const { userData } = useSelector((state) => state.auth);

  const followersPosts = [
    ...posts.filter((post) =>
      userData.following.some((user) => user._id === post.userId)
    ),
    ...userPosts,
  ];

  const trendingPosts = [...followersPosts].sort(
    (post1, post2) => post2.likes.likedBy.length - post1.likes.likedBy.length
  );

  const latestPosts = [...followersPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const oldestPosts = [...followersPosts].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostsByUser(userData._id));
  }, [dispatch, userData._id, posts]);

  return (
    <>
      <div className="p-2">
        <div className="flex justify-between relative">
          <h1
            className={`font-bold text-lg text-red-400 ${
              filter === "latestPosts" ? "" : "hidden"
            }`}
          >
            Latest Posts
          </h1>
          <h1
            className={`font-bold text-lg text-red-400 ${
              filter === "oldestPosts" ? "" : "hidden"
            }`}
          >
            Oldest Posts
          </h1>
          <h1
            className={`font-bold text-lg text-red-400 ${
              filter === "trendingPosts" ? "" : "hidden"
            }`}
          >
            Trending Posts
          </h1>
          <span
            className="material-icons-outlined cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            tune
          </span>
          {showFilter && (
            <PostsFilter setFilter={setFilter} setShowFilter={setShowFilter} />
          )}
        </div>
        <div>
          {(
            (filter === "latestPosts" && latestPosts) ||
            (filter === "oldestPosts" && oldestPosts) ||
            (filter === "trendingPosts" && trendingPosts)
          ).map((post) => {
            return (
              <div key={post._id}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
