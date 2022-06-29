import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Post } from "../../components/Post/Post";
import { getPostsData } from "../../thunks/postsThunks";
import { getBookmarks } from "../../thunks/usersThunk";

export const Bookmarks = () => {
  const { bookmarks } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  const bookmarkPosts = posts.filter((post) =>
    bookmarks.some((bookmark) => bookmark._id === post._id)
  );

  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  return (
    <div>
      {bookmarkPosts.length !== 0 ? (
        <div>
          <h1 className="mt-4 text-lg">Your Bookmarks</h1>
          {bookmarkPosts.map((post) => {
            return (
              <div key={post._id}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1 className="p-2 mt-4 text-center text-xl">
            No Bookmarks present !
          </h1>
          <Link to="/explore">
            <button className="mx-auto block items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Explore
            </button>
          </Link>
        </>
      )}
    </div>
  );
};
