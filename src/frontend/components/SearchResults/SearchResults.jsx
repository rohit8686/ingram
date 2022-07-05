import { Image } from "cloudinary-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const SearchResults = ({
  usersDataBySearch,
  searchRef,
  setIsSearchEmpty,
}) => {
  const navigate = useNavigate();

  return (
    <div className="">
      {usersDataBySearch.map(({ _id, username, image }) => {
        return (
          <div
            key={_id}
            className="flex items-center gap-2 my-1 cursor-pointer"
            onClick={() => {
              navigate(`profile/${_id}`);
              setIsSearchEmpty(true);
              searchRef.current.value = "";
            }}
          >
            <Image
              cloudName={process.env.REACT_APP_CLOUD_NAME}
              publicId={image}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p>{username}</p>
          </div>
        );
      })}
    </div>
  );
};
