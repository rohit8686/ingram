import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import postsReducer from "../slice/postsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
