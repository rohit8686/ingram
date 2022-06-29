import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsByPageData } from "../../thunks/postsThunks";
import infiniteloader from "../../images/infinite-loader.svg";
import { Post } from "../../components/Post/Post";

export const Explore = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const POSTS_PER_PAGE = 3;
  const { isPaginateLoading, paginatedPosts, totalPosts } = useSelector(
    (state) => state.posts
  );
  const hasMorePosts = pageNumber < totalPosts / POSTS_PER_PAGE;

  const observer = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isPaginateLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMorePosts) {
            setPageNumber(pageNumber + 1);
          }
        },
        { threshold: 0.7 }
      );
      if (post) observer.current.observe(post);
    },
    [isPaginateLoading, pageNumber, hasMorePosts]
  );

  useEffect(() => {
    dispatch(getPostsByPageData(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="p-2">
      <div>
        {paginatedPosts.map((post, index) => {
          if (paginatedPosts.length === index + 1) {
            return (
              <div key={post._id} ref={lastPostRef}>
                <Post post={post} />
              </div>
            );
          }
          return (
            <div key={post._id}>
              <Post post={post} />
            </div>
          );
        })}
      </div>

      {isPaginateLoading && (
        <img
          src={infiniteloader}
          alt="infinite-loader"
          className="w-28 h-28 mx-auto"
        />
      )}
    </div>
  );
};
