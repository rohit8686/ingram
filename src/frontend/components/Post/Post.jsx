import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../thunks/postsThunks";
import { Image } from "cloudinary-react";
import { timeSince } from "../../utils/utils";
import { toastContainer } from "../../toast/toast";
import { useNavigate } from "react-router-dom";
import { bookmarkPost, removeBookmark } from "../../thunks/usersThunk";
import { LikedByModal } from "../LikedByModal/LikedByModal";
import { useState } from "react";

export const Post = ({ post }) => {
  const [showLikes, setShowLikes] = useState(false);
  const { _id, content, likes, username, comments, createdAt } = post;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, encodedToken } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.users);

  const likePostHandler = async () => {
    const res = await dispatch(likePost({ _id, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      toastContainer("Liked post ! ", "success");
    } else {
      toastContainer("Like post error! ", "error");
    }
  };

  const dislikePostHandler = async () => {
    const res = await dispatch(dislikePost({ _id, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      toastContainer("Disliked post ! ", "info");
    } else {
      toastContainer("Dislike post error! ", "error");
    }
  };

  const removeBookmarkHandler = async () => {
    const res = await dispatch(removeBookmark({ _id, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      toastContainer("Bookmark removed ! ", "info");
    } else {
      toastContainer("Bookmark removing error! ", "error");
    }
  };

  const bookmarkPostHandler = async () => {
    const res = await dispatch(bookmarkPost({ _id, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      toastContainer("Bookmarked post ! ", "success");
    } else {
      toastContainer("Bookmark post error! ", "error");
    }
  };

  return (
    <div className="flex gap-2 sm:gap-4 p-4 border-2 rounded-lg my-4">
      <Image
        cloudName="dxj7py6nj"
        publicId="https://res.cloudinary.com/dxj7py6nj/image/upload/v1655890516/ingram/profile_t8on9b.png"
        className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
      />
      <div className="flex flex-grow flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-red-400">{username}</h1>
          <p
            className="text-sm cursor-pointer"
            onClick={() => navigate(`/posts/${_id}`)}
          >
            {timeSince(createdAt)}
          </p>
        </div>
        <p
          className="text-left cursor-pointer"
          onClick={() => navigate(`/posts/${_id}`)}
        >
          {content.postText}
        </p>
        {content.postImage && (
          <Image
            cloudName="dxj7py6nj"
            publicId={content.postImage}
            className="object-contain pt-2 cursor-pointer"
            onClick={() => navigate(`/posts/${_id}`)}
          />
        )}
        <div className="flex justify-between pt-4">
          <div className="flex gap-2 cursor-pointer">
            <span
              className={`material-icons-outlined text-red-400 ${
                likes.likedBy.some((like) => like._id === userData._id)
                  ? "hidden"
                  : ""
              }`}
              onClick={likePostHandler}
            >
              favorite_border
            </span>
            <span
              className={`material-icons text-red-400 ${
                likes.likedBy.some((like) => like._id === userData._id)
                  ? ""
                  : "hidden"
              }`}
              onClick={dislikePostHandler}
            >
              favorite
            </span>
            <p onClick={() => setShowLikes(!showLikes)}>{likes.likeCount}</p>
          </div>

          <div className="flex gap-2 cursor-pointer">
            <span
              className="material-icons-outlined"
              onClick={() => navigate(`/posts/${_id}`)}
            >
              comment
            </span>
            <p>{comments.length}</p>
          </div>
          <span
            className={`material-icons-outlined cursor-pointer text-red-400 ${
              bookmarks.some((bookmark) => bookmark._id === _id) ? "hidden" : ""
            }`}
            onClick={bookmarkPostHandler}
          >
            bookmark_border
          </span>
          <span
            className={`material-icons cursor-pointer text-red-400 ${
              bookmarks.some((bookmark) => bookmark._id === _id) ? "" : "hidden"
            }`}
            onClick={removeBookmarkHandler}
          >
            bookmark
          </span>
          <span className="material-icons-outlined cursor-pointer">share</span>
        </div>
        <div className="relative" onClick={() => navigate(`/posts/${_id}`)}>
          <input
            type="text"
            name="comment"
            id="comment"
            className="mt-4 px-2 py-1 text-black w-full rounded-md"
            placeholder="Add a comment"
          />
          <button>
            <span className="material-icons-outlined absolute bottom-1 right-0 text-black px-2 pt-0 cursor-pointer">
              shortcut
            </span>
          </button>
        </div>
      </div>
      {showLikes && <LikedByModal likes={likes} setShowLikes={setShowLikes} />}
    </div>
  );
};