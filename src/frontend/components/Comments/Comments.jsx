import { Image } from "cloudinary-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../thunks/usersThunk";
import { toastContainer } from "../../toast/toast";
import { timeSince } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { deleteComment } from "../../thunks/postsThunks";

export const Comments = ({ comments, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, encodedToken } = useSelector((state) => state.auth);

  const deleteCommentHandler = async (_id, postId, encodedToken) => {
    const res = await dispatch(deleteComment({ _id, postId, encodedToken }));
    if ([200, 201].includes(res.payload.res.status)) {
      toastContainer("Deleted comment ! ", "success");
    } else {
      toastContainer("Delete comment error! ", "error");
    }
  };

  return (
    <>
      {comments?.map(({ _id, username, text, createdAt, image, userId }) => {
        return (
          <div className="flex gap-2 pt-2" key={_id}>
            <Image
              cloudName="dxj7py6nj"
              publicId={image}
              className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover cursor-pointer"
              onClick={() => navigate(`/profile/${userId}`)}
            />
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <p
                  className="text-lg text-red-400 cursor-pointer"
                  onClick={async () => {
                    const res = await dispatch(getUser({ userId }));
                    if ([200, 201].includes(res.payload.status)) {
                      navigate(`/profile/${userId}`);
                    } else {
                      toastContainer(
                        "Error in getting profile data !",
                        "error"
                      );
                    }
                  }}
                >
                  {username}
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-sm">{timeSince(createdAt)}</p>
                  {userData._id === userId && (
                    <span
                      className="material-icons-outlined cursor-pointer"
                      onClick={() =>
                        deleteCommentHandler(_id, postId, encodedToken)
                      }
                    >
                      delete
                    </span>
                  )}
                </div>
              </div>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
