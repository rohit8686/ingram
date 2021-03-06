import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { clearErrorMsg } from "../../slice/authSlice";
import { login } from "../../thunks/authThunks";
import { toastContainer } from "../../toast/toast";

export const Login = () => {
  const { errorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    setTimeout(() => dispatch(clearErrorMsg()), 4000);
    setUser({ username: "", password: "" });
  }, [errorMsg, dispatch]);

  return (
    <div className="border-white rounded-2xl p-2 w-10/12 sm:w-1/2 md:w-1/3 mt-4 mx-auto shadow-[0_0_3px_2px_rgba(99,102,241,1)]">
      <div className="p-2">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await dispatch(login(user));
            if (res.type === "auth/login/fulfilled") {
              setTimeout(
                () => toastContainer("Login Successfull", "success"),
                200
              );
              navigate(location?.state?.from?.pathname || "/home", {
                replace: true,
              });
            }
          }}
        >
          <div className="pt-1">
            <label htmlFor="email">Email or Username : </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="abcd@gmail.com"
              autoComplete="off"
              className="w-full text-black pl-1 placeholder:pl-1 rounded"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="pt-4">
            <label htmlFor="password">Password : </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full text-black pl-1 placeholder:pl-1 rounded"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 w-full py-1 px-4 border border-blue-700 cursor-pointer rounded text-sm">
            Login
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mt-4 py-1 px-4 border border-blue-700 cursor-pointer rounded text-sm text-center"
            onClick={() =>
              setUser({ username: "Rohit", password: "rohitrohit" })
            }
          >
            Login with test credentials
          </button>
          <h3 className="text-center text-red-600">{errorMsg}</h3>
          <Link to="/signup">
            <div className="flex justify-center mt-2">
              Create new Account
              <span className="material-icons-outlined icon chevron-right">
                chevron_right
              </span>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};
