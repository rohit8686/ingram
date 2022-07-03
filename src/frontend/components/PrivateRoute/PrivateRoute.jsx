import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FollowSuggestions } from "../FollowSuggestions/FollowSuggestions";
import { Search } from "../Search/Search";
import { Sidebar } from "../Sidebar/Sidebar";

export const PrivateRoute = () => {
  const location = useLocation();
  const { encodedToken } = useSelector((store) => store.auth);

  return (
    <>
      {encodedToken ? (
        <div className="sm:flex">
          <Sidebar />
          <div className="sm:hidden top-2 w-full mx-auto">
            <Search />
          </div>
          <div className="mx-auto sm:w-1/2 lg:w-3/5">
            <Outlet />
          </div>
          <div className="hidden sm:block sticky top-2 w-1/2 sm:w-1/3 lg:w-1/4">
            <Search />
            <FollowSuggestions />
          </div>
          <ToastContainer />
        </div>
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};
