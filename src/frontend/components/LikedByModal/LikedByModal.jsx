import { Image } from "cloudinary-react";
import React from "react";

export const LikedByModal = ({ likes, setShowLikes }) => {
  const { likedBy } = likes;

  return (
    <div className="fixed text-black top-0 left-0 z-10 w-full h-screen flex justify-center items-center">
      <div className="bg-gray-700 w-5/6 h-1/2 sm:w-1/3 md:w-1/3 sm:h-1/2 mx-auto rounded-xl p-4 text-white overflow-auto scrollbar">
        <div className="flex justify-between border-b-2 border-red-500">
          <h1 className="text-lg font-bold ">Liked By</h1>
          <span
            className="material-icons-outlined cursor-pointer"
            onClick={() => setShowLikes((prev) => !prev)}
          >
            close
          </span>
        </div>
        {likedBy.length === 0 && <h1 className="mt-2">Be the first to like the post !</h1>}
        {likedBy.map(({ _id, username }) => {
          return (
            <div className="flex mt-2 gap-4 items-center" key={_id}>
              <Image
                cloudName="dxj7py6nj"
                publicId="https://res.cloudinary.com/dxj7py6nj/image/upload/v1655890516/ingram/profile_t8on9b.png"
                className="w-8 h-8 rounded-full md:w-10 md:h-10 object-cover"
              />
              <h1 className="">{username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
