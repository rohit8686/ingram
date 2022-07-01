import { Image } from "cloudinary-react";
import React from "react";

export const FollowingModal = ({ following, setShowFollowing }) => {
  return (
    <div className="fixed text-black top-0 left-0 z-10 w-full h-screen flex justify-center items-center">
      <div className="bg-gray-700 w-5/6 h-1/2 sm:w-1/3 md:w-1/3 sm:h-1/2 mx-auto rounded-xl p-4 text-white overflow-auto scrollbar">
        <div className="flex justify-between border-b-2 border-red-500">
          <h1 className="text-lg font-bold ">Following</h1>
          <span
            className="material-icons-outlined cursor-pointer"
            onClick={() => setShowFollowing((prev) => !prev)}
          >
            close
          </span>
        </div>
        {following.length === 0 && <h1 className="mt-2">No Followers !</h1>}
        {following.map(({ _id, username, image }) => {
          return (
            <div className="flex mt-2 gap-4 items-center" key={_id}>
              <Image
                cloudName={process.env.REACT_APP_CLOUD_NAME}
                publicId={image}
                className="w-8 h-8 rounded-full md:w-10 md:h-10 object-cover"
              />
              <h1>{username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
