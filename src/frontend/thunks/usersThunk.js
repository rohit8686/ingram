import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkpost",
  async ({ _id, encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return res;
    } catch (e) {
      rejectWithValue("Error in bookmarking post");
    }
  }
);

export const removeBookmark = createAsyncThunk(
  "users/removeBookmark",
  async ({ _id, encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      return res;
    } catch (e) {
      rejectWithValue("Error in removing bookmark");
    }
  }
);

export const getBookmarks = createAsyncThunk(
  "users/bookmarks",
  async ({ encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: encodedToken },
      });
      return res;
    } catch (e) {
      rejectWithValue("Error in bookmarking post");
    }
  }
);
