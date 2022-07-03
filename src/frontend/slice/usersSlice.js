import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  getBookmarks,
  getUser,
  getUsers,
  getUsersBySearch,
  removeBookmark,
  unfollowUser,
} from "../thunks/usersThunk";

const initialState = {
  bookmarks: [],
  userProfile: [],
  usersData: [],
  usersDataBySearch: [],
  errorMsg: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsersDataBySearch: (state) => {
      state.usersDataBySearch = [];
    },
  },
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

    [getUsersBySearch.fulfilled]: (state, action) => {
      state.usersDataBySearch = action.payload.data.users;
    },
    [getUsersBySearch.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [unfollowUser.fulfilled]: (state, action) => {
      state.userProfile = action.payload.data.followUser;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { clearUsersDataBySearch } = usersSlice.actions;
export default usersSlice.reducer;
