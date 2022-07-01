import React from "react";

export const Search = () => {
  return (
    <div className="flex m-4 sticky top-2">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full p-2 rounded-md text-black"
        autoComplete="off"
        placeholder="Search"
      />
      <span className="material-icons-outlined cursor-pointer absolute top-2 right-2 text-black">
        search
      </span>
    </div>
  );
};
