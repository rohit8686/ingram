import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrorMsg } from "../../slice/authSlice";
import { signup } from "../../thunks/authThunks";
import { toastContainer } from "../../toast/toast";

export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const { errorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => dispatch(clearErrorMsg()), 4000);
    setUser({ firstname: "", lastname: "", username: "", password: "" });
  }, [errorMsg, dispatch]);

  return (
    <div className="border-white rounded-2xl p-2 w-10/12 sm:w-1/2 md:w-1/3 mt-4 mx-auto shadow-[0_0_3px_2px_rgba(99,102,241,1)]">
      <div className="p-2">
        <h2 className="text-center text-2xl font-bold">Signup</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await dispatch(signup(user));
            if (res.type === "auth/signup/fulfilled") {
              setTimeout(
                () => toastContainer("Signup Successfull", "success"),
                200
              );
              navigate("/home");
            }
          }}
        >
          <div className="pt-1">
            <label htmlFor="email">First name : </label>
            <br />
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="John"
              autoComplete="off"
              className="w-full text-black pl-1 placeholder:pl-1 rounded"
              required
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
          </div>
          <div className="pt-4">
            <label htmlFor="email">Last name : </label>
            <br />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Smith"
              autoComplete="off"
              className="w-full text-black pl-1 placeholder:pl-1 rounded"
              required
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
          </div>
          <div className="pt-4">
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
            Signup
          </button>
          <h3 className="text-center text-red-600">{errorMsg}</h3>
          <Link to="/login">
            <div className="flex justify-center mt-2">
              Already have an account
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
