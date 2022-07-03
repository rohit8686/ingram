import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUsersDataBySearch } from "../../slice/usersSlice";
import { getUsersBySearch } from "../../thunks/usersThunk";
import { SearchResults } from "../SearchResults/SearchResults";

export const Search = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const searchRef = useRef(null);
  const { usersDataBySearch } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const debounceFunction = (fn, time) => {
    let timerId;
    return () => {
      clearInterval(timerId);
      timerId = setTimeout(() => fn(), time);
    };
  };

  const debounce = debounceFunction(() => {
    if (searchRef.current.value) {
      dispatch(clearUsersDataBySearch());
      dispatch(getUsersBySearch({ searchText: searchRef.current.value }));
      setIsSearchEmpty(false);
    } else {
      setIsSearchEmpty(true);
    }
  }, 400);

  return (
    <>
      <div className="flex flex-col m-4 sticky top-2 z-20">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full p-2 rounded-md text-black"
            autoComplete="off"
            placeholder="Search users..."
            ref={searchRef}
            onChange={debounce}
          />
          <span className="material-icons-outlined cursor-pointer absolute top-2 right-2 text-black">
            search
          </span>
          {!isSearchEmpty && usersDataBySearch.length !== 0 && (
            <div className="mt-1 p-2 bg-white text-black z-20 rounded-md">
              <SearchResults
                usersDataBySearch={usersDataBySearch}
                searchRef={searchRef}
                setIsSearchEmpty={setIsSearchEmpty}
              />
            </div>
          )}
          {usersDataBySearch.length === 0 && (
            <div
              className={`mt-1 p-2 bg-white text-black z-20 rounded-md ${
                isSearchEmpty ? "hidden" : ""
              }`}
            >
              No Users found
            </div>
          )}
        </div>
      </div>
    </>
  );
};
