import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarContent = () => {
  return (
    <div className="w-1/2 md:inline-block sm:w-1/2 md:w-1/3">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "flex gap-2 p-2 text-red-400" : "flex gap-2 p-2"
        }
      >
        <span className="material-icons-outlined">home</span>
        <p className="text-lg font-bold">Home</p>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? "flex gap-2 p-2 text-red-400" : "flex gap-2 p-2"
        }
      >
        <span className="material-icons-outlined">explore</span>
        <h1 className="text-lg font-bold">Explore</h1>
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "flex gap-2 p-2 text-red-400" : "flex gap-2 p-2"
        }
      >
        <span className="material-icons-outlined">bookmark_border</span>
        <h1 className="text-lg font-bold">Bookmarks</h1>
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive ? "flex gap-2 p-2 text-red-400" : "flex gap-2 p-2"
        }
      >
        <span className="material-icons-outlined">notifications_active</span>
        <h1 className="text-lg font-bold">Notifications</h1>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "flex gap-2 p-2 text-red-400" : "flex gap-2 p-2"
        }
      >
        <span className="material-icons-outlined">account_circle</span>
        <h1 className="text-lg font-bold">Profile</h1>
      </NavLink>
    </div>
  );
};
