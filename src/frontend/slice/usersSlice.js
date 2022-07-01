import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  getBookmarks,
  removeBookmark,
} from "../thunks/usersThunk";

const initialState = {
  bookmarks: [],
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
  },
});

export default usersSlice.reducer;
