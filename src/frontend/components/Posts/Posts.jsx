import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import { Post } from "../Post/Post";
import { getPostsData } from "../../thunks/postsThunks";

export const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.posts);
  const latestPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  return (
    <>
      <div className="p-2">
        <div className="flex justify-between">
          <h1>Latest Posts</h1>
          <span className="material-icons-outlined">tune</span>
        </div>
        {isLoading ? (
          <Loader type="spinner-default" bgColor={"red"} size={100} />
        ) : (
          <div>
            {latestPosts.map((post) => {
              return (
                <div key={post._id}>
                  <Post post={post} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
