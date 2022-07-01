import { Image } from "cloudinary-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUser } from "../../thunks/usersThunk";
import { setUserData } from "../../slice/authSlice";
import { toastContainer } from "../../toast/toast";

export const EditProfileModal = ({ setShowEditProfile, userData }) => {
  const { encodedToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { image, username, bio, website } = userData;
  const [modifiedUserData, setModifiedUserData] = useState({
    bio: bio,
    website: website,
  });

  const modifiedUserDataHandler = async (modifiedUserData, encodedToken) => {
    const res = await dispatch(editUser({ modifiedUserData, encodedToken }));
    if ([200, 201].includes(res.payload.status)) {
      dispatch(setUserData(res.payload.data.user));
      toastContainer("Profile edited !", "success");
      setShowEditProfile((prev) => !prev);
    } else {
      toastContainer("Error in editing profile !", "error");
    }
  };
  const userDataInputHandler = (e) => {
    const field = e.target.name;
    setModifiedUserData({ ...modifiedUserData, [field]: e.target.value });
  };

  return (
    <div className="fixed text-black top-0 left-0 z-10 w-full h-screen flex justify-center items-center">
      <div className="bg-gray-700 w-5/6 h-1/2 sm:w-1/2 md:w-2/5 sm:h-2/3 mx-auto rounded-xl p-4 text-white overflow-auto scrollbar">
        <div className="flex justify-between border-b-2 border-red-500">
          <h1 className="text-lg font-bold ">Edit Profile</h1>
          <span
            className="material-icons-outlined cursor-pointer"
            onClick={() => setShowEditProfile((prev) => !prev)}
          >
            close
          </span>
        </div>
        <Image
          cloudName={process.env.REACT_APP_CLOUD_NAME}
          publicId={image}
          className="object-contain pt-2 w-14 h-14 cursor-pointer"
        />
        <div className="mt-2">
          <label htmlFor="username">
            Name :
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              disabled
              className="cursor-not-allowed p-1 w-full"
            />
          </label>
        </div>
        <div>
          <label htmlFor="bio">
            Bio :
            <textarea
              name="bio"
              id="bio"
              cols="20"
              rows="5"
              className="w-full text-black p-1"
              placeholder="Something about yourself"
              value={modifiedUserData.bio}
              onChange={userDataInputHandler}
            ></textarea>
          </label>
        </div>
        <label htmlFor="website">
          Website :
          <input
            type="text"
            name="website"
            id="website"
            value={modifiedUserData.website}
            onChange={userDataInputHandler}
            className="text-black p-1 w-full"
          />
        </label>
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-1.5 text-center my-2 text-md"
            onClick={() =>
              modifiedUserDataHandler(modifiedUserData, encodedToken)
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
