import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../thunks/postsThunks";
import { toastContainer } from "../../toast/toast";
import { EditPostModal } from "../EditPostModal/EditPostModal";

export const PostsOptions = ({ post }) => {
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const { _id } = post;
  const dispatch = useDispatch();
  const { encodedToken } = useSelector((state) => state.auth);

  const deletePostHandler = async (_id) => {
    const res = await dispatch(deletePost({ encodedToken, _id }));
    if ([200, 201].includes(res.payload.status)) {
      toastContainer("Post deleted !", "error");
    } else {
      toastContainer("Post deletion error !", "error");
    }
  };

  return (
    <div className="bg-white rounded-lg text-black px-4 py-2 absolute right-0 top-7">
      <button onClick={() => setShowEditPostModal((prev) => !prev)}>
        Edit
      </button>
      <hr />
      <button onClick={() => deletePostHandler(_id)}>Delete</button>
      {showEditPostModal && (
        <EditPostModal
          post={post}
          setShowEditPostModal={setShowEditPostModal}
        />
      )}
    </div>
  );
};
