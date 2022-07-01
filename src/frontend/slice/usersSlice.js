import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  followUser,
  getBookmarks,
  getUser,
  getUsers,
  removeBookmark,
  unfollowUser,
} from "../thunks/usersThunk";

const initialState = {
  bookmarks: [],
  userProfile: [],
  usersData: [],
  errorMsg: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookmarks.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.data.bookmarks;
    },
    [getBookmarks.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [bookmarkPost.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.data.bookmarks;
    },
    [bookmarkPost.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [removeBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.data.bookmarks;
    },
    [removeBookmark.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [getUser.fulfilled]: (state, action) => {
      state.userProfile = action.payload.data.user;
    },
    [getUser.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.usersData = action.payload.data.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [followUser.fulfilled]: (state, action) => {
      state.userProfile = action.payload.data.followUser;
    },
    [followUser.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [unfollowUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.userProfile = action.payload.data.followUser;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export default usersSlice.reducer;
