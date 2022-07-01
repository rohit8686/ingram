import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import postsReducer from "../slice/postsSlice";
import usersReducer from "../slice/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
