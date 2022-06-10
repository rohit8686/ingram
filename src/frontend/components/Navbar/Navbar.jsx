import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../slice/authSlice";
import { toastContainer } from "../../toast/toast";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-800 text-zinc-100 p-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="text-2xl font-bold">Ingram</p>
        </Link>
        <span
          className="material-icons-outlined"
          onClick={() => {
            dispatch(logout());
            toastContainer("Logged out !", "error");
            navigate("/");
          }}
        >
          logout
        </span>
      </div>
    </nav>
  );
};
