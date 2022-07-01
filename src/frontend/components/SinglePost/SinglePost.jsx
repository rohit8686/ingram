import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  dislikePost,
  getPostById,
  likePost,
} from "../../thunks/postsThunks";
import { Image } from "cloudinary-react";
import { timeSince } from "../../utils/utils";
import { toastContainer } from "../../toast/toast";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Comments } from "../Comments/Comments";
import { bookmarkPost, getUser, removeBookmark } from "../../thunks/usersThunk";
import { LikedByModal } from "../LikedByModal/LikedByModal";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { singlePostData, posts } = useSelector((state) => state.posts);
  const { _id, content, likes, username, comments, createdAt, image, userId } =
    singlePostData;
  const [commentData, setCommentData] = useState({ _id: "", text: "" });
  const dispatch = useDispatch();
  const { userData, encodedToken } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.users);
  const [showLikes, setShowLikes] = useState(false);

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch, posts, postId]);

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

  const commentHandler = async (e) => {
    if (
      commentData._id === _id &&
      commentData.text &&
      commentData.text.trim() !== ""
    ) {
      const {
        payload: { res },
      } = await dispatch(addComment({ ...commentData, encodedToken }));
      setCommentData({ _id: "", text: "" });
      if ([200, 201].includes(res.status)) {
        toastContainer("Comment added ! ", "success");
      } else {
        toastContainer("Error in adding comment ! ", "error");
      }
    } else {
      toastContainer("Comment cannot be empty", "warning");
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
    <>
      <button className="flex items-center mt-4" onClick={() => navigate(-1)}>
        <span className="material-icons-outlined">arrow_back</span>
        <p>Go Back</p>
      </button>

      <>
        <div className="flex gap-2 sm:gap-4 p-4 border-2 rounded-lg my-4">
          <Image
            cloudName={process.env.REACT_APP_CLOUD_NAME}
            publicId={image}
            className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
          />
          <div className="flex flex-grow flex-col">
            <div className="flex justify-between items-center">
              <h1
                className="text-lg text-red-400"
                onClick={async () => {
                  const res = await dispatch(getUser({ userId }));
                  if ([200, 201].includes(res.payload.status)) {
                    navigate(`/profile/${userId}`);
                  } else {
                    toastContainer("Error in getting profile data !", "error");
                  }
                }}
              >
                {username}
              </h1>
              <p className="text-sm">{timeSince(createdAt)}</p>
            </div>
            <p className="text-left">{content?.postText}</p>
            {content?.postImage && (
              <Image
                cloudName={process.env.REACT_APP_CLOUD_NAME}
                publicId={content?.postImage}
                className="object-contain pt-2"
              />
            )}
            {likes?.likedBy?.length > 1 && (
              <p className="pt-4 text-sm text-red-400/75">
                Liked by {likes?.likedBy[0]?.username} and{" "}
                {likes?.likedBy?.length - 1} others
              </p>
            )}
            {likes?.likedBy?.length === 1 && (
              <p className="pt-4 text-sm text-red-400/75">
                Liked by {likes?.likedBy[0]?.username}
              </p>
            )}
            <div className="flex justify-between pt-2">
              <div className="flex gap-2 cursor-pointer">
                <span
                  className={`material-icons-outlined text-red-400 ${
                    likes?.likedBy.some((like) => like._id === userData._id)
                      ? "hidden"
                      : ""
                  }`}
                  onClick={likePostHandler}
                >
                  favorite_border
                </span>
                <span
                  className={`material-icons text-red-400 ${
                    likes?.likedBy.some((like) => like._id === userData._id)
                      ? ""
                      : "hidden"
                  }`}
                  onClick={dislikePostHandler}
                >
                  favorite
                </span>
                <p onClick={() => setShowLikes(!showLikes)}>
                  {likes?.likeCount}
                </p>
              </div>

              <div className="flex gap-2 cursor-pointer">
                <span className="material-icons-outlined ">comment</span>
                <p>{comments?.length}</p>
              </div>
              <span
                className={`material-icons-outlined cursor-pointer text-red-400 ${
                  bookmarks.some((bookmark) => bookmark._id === _id)
                    ? "hidden"
                    : ""
                }`}
                onClick={bookmarkPostHandler}
              >
                bookmark_border
              </span>
              <span
                className={`material-icons cursor-pointer text-red-400 ${
                  bookmarks.some((bookmark) => bookmark._id === _id)
                    ? ""
                    : "hidden"
                }`}
                onClick={removeBookmarkHandler}
              >
                bookmark
              </span>
              <span className="material-icons-outlined cursor-pointer">
                share
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="comment"
                id="comment"
                className="mt-4 px-2 py-1 text-black w-full rounded-md"
                placeholder="Add a comment"
                value={commentData._id === _id ? commentData.text : ""}
                onChange={(e) => setCommentData({ _id, text: e.target.value })}
              />
              <button onClick={commentHandler}>
                <span className="material-icons-outlined absolute bottom-1 right-0 text-black px-2 pt-0 cursor-pointer">
                  shortcut
                </span>
              </button>
            </div>
            <Comments comments={comments} />
          </div>
          {showLikes && (
            <LikedByModal likes={likes} setShowLikes={setShowLikes} />
          )}
        </div>
      </>
    </>
  );
};
