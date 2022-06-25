import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../slice/authSlice";
import { setShowSidebar } from "../../slice/postsSlice";
import { toastContainer } from "../../toast/toast";

export const Navbar = () => {
  const { encodedToken } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-800 text-zinc-100 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="material-icons-outlined cursor-pointer md:hidden"
            onClick={() => dispatch(setShowSidebar())}
          >
            menu
          </span>
          <Link to="/">
            <p className="text-2xl font-bold">Ingram</p>
          </Link>
        </div>
        {encodedToken ? (
          <span
            className="material-icons-outlined cursor-pointer"
            onClick={() => {
              dispatch(logout());
              setTimeout(() => toastContainer("Logged out !", "error"), 200);
              navigate("/");
            }}
          >
            logout
          </span>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-white rounded text-sm block mx-auto">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
