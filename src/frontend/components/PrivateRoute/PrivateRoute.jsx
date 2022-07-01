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
          <div className="mx-auto sm:w-1/2">
            <Outlet />
          </div>
          <div className="w-full sm:w-1/4">
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
