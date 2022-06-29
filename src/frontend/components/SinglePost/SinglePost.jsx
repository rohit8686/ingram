import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPostById } from "../../thunks/postsThunks";
import { Image } from "cloudinary-react";
import { timeSince } from "../../utils/utils";
import { toastContainer } from "../../toast/toast";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import { Comments } from "../Comments/Comments";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { isLoading, singlePostData, posts } = useSelector(
    (state) => state.posts
  );
  const { _id, content, likes, username, comments, updatedAt } = singlePostData;
  const [commentData, setCommentData] = useState({ _id: "", text: "" });
  const dispatch = useDispatch();
  const { encodedToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch, posts, postId]);

  return (
    <>
      <button className="flex items-center mt-4" onClick={() => navigate(-1)}>
        <span className="material-icons-outlined">arrow_back</span>
        <p>Go Back</p>
      </button>
      {isLoading ? (
        <Loader type="spinner-default" bgColor={"red"} size={100} />
      ) : (
        <>
          <div className="flex gap-2 sm:gap-4 p-4 border-2 rounded-lg my-4">
            <Image
              cloudName="dxj7py6nj"
              publicId="https://res.cloudinary.com/dxj7py6nj/image/upload/v1655890516/ingram/profile_t8on9b.png"
              className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
            />
            <div className="flex flex-grow flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-lg text-red-400">{username}</h1>
                <p className="text-sm">{timeSince(updatedAt)}</p>
              </div>
              <p className="text-left">{content?.postText}</p>
              {content?.postImage && (
                <Image
                  cloudName="dxj7py6nj"
                  publicId={content?.postImage}
                  className="object-contain pt-2"
                />
              )}
              <div className="flex justify-between pt-4">
                <div className="flex gap-2">
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p>{likes?.likeCount}</p>
                </div>

                <div className="flex gap-2">
                  <span className="material-icons-outlined">comment</span>
                  <p>{comments?.length}</p>
                </div>
                <span className="material-icons-outlined">bookmark_border</span>
                <span className="material-icons-outlined">share</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name=""
                  id=""
                  className="mt-4 px-2 py-1 text-black w-full rounded-md"
                  placeholder="Add a comment"
                  value={commentData._id === _id ? commentData.text : ""}
                  onChange={(e) =>
                    setCommentData({ _id, text: e.target.value })
                  }
                />
                <button
                  onClick={(e) => {
                    if (
                      commentData._id === _id &&
                      commentData.text &&
                      commentData.text.trim() !== ""
                    ) {
                      dispatch(addComment({ ...commentData, encodedToken }));
                      setCommentData({ _id: "", text: "" });
                    } else {
                      toastContainer("Comment cannot be empty", "warning");
                    }
                  }}
                >
                  <span className="material-icons-outlined absolute bottom-1 right-0 text-black px-2 pt-0 cursor-pointer">
                    shortcut
                  </span>
                </button>
              </div>
              <Comments comments={comments} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
