import { Image } from "cloudinary-react";
import React from "react";
import { timeSince } from "../../utils/utils";

export const Comments = ({ comments }) => {
  return (
    <>
      {comments?.map(({ _id, username, text, updatedAt }) => {
        return (
          <>
            <div key={_id} className="pt-2">
              <div className="flex gap-2">
                <Image
                  cloudName="dxj7py6nj"
                  publicId="https://res.cloudinary.com/dxj7py6nj/image/upload/v1655890516/ingram/profile_t8on9b.png"
                  className="w-6 h-6 rounded-full md:w-10 md:h-10 object-cover"
                />
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-red-400">{username}</p>
                    <p className="text-sm">{timeSince(updatedAt)}</p>
                  </div>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
