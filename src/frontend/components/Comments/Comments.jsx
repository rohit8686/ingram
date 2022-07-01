import { Image } from "cloudinary-react";
import React from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../thunks/usersThunk";
import { toastContainer } from "../../toast/toast";
import { timeSince } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export const Comments = ({ comments }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {comments?.map(({ _id, username, text, createdAt, image, userId }) => {
        return (
          <div className="flex gap-2 pt-2" key={_id}>
            <Image
              cloudName="dxj7py6nj"
              publicId={image}
              className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
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
                <p className="text-sm">{timeSince(createdAt)}</p>
              </div>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
