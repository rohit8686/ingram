import { Image } from "cloudinary-react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../slice/authSlice";
import { followUser, getUsers } from "../../thunks/usersThunk";
import { toastContainer } from "../../toast/toast";

export const FollowSuggestions = () => {
  const { usersData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData, encodedToken } = useSelector((state) => state.auth);
  const filteredUserData = usersData
    .filter(
      (user) =>
        user._id !== userData._id &&
        !userData.following.some(
          (followedUser) => followedUser._id === user._id
        )
    )
    .slice(0, 3);

  const followHandler = async (_id) => {
    const res = await dispatch(followUser({ profileId: _id, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      dispatch(setUserData(res.payload.data.user));
      toastContainer("Followed user !", "success");
    } else {
      toastContainer("Error in following user !", "error");
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="sticky top-14 m-4">
      <h1 className="font-bold">Suggestions</h1>
      {filteredUserData.map(({ _id, username, image }) => {
        return (
          <div key={_id} className="flex justify-between py-2">
            <div
              className="flex gap-2 justify-center items-center"
              onClick={() => navigate(`/profile/${_id}`)}
            >
              <Image
                cloudName={process.env.REACT_APP_CLOUD_NAME}
                publicId={image}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-sm md:text-lg text-red-400 font-semibold cursor-pointer">
                {username}
              </h1>
            </div>
            <button
              onClick={() => followHandler(_id)}
              type="button"
              className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-md px-2 md:px-3 py-1.5 text-center my-2 ${
                userData?.following?.some((user) => user._id === Number(_id))
                  ? "hidden"
                  : ""
              }`}
            >
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};
