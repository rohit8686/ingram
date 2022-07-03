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

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users`);
      return res;
    } catch (e) {
      rejectWithValue("Error in getting users");
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      return res;
    } catch (e) {
      rejectWithValue("Error in getting user");
    }
  }
);

export const getUsersBySearch = createAsyncThunk(
  "users/getUsersBySearch",
  async ({ searchText }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/users/search/${searchText}`);
      return res;
    } catch (e) {
      rejectWithValue("Error in getting user");
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ profileId, encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/users/follow/${profileId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return res;
    } catch (e) {
      rejectWithValue("Error in getting user");
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ profileId, encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/users/unfollow/${profileId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return res;
    } catch (e) {
      rejectWithValue("Error in getting user");
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ modifiedUserData, encodedToken }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/users/edit`,
        { userData: modifiedUserData },
        {
          headers: { authorization: encodedToken },
        }
      );
      return res;
    } catch (e) {
      rejectWithValue("Error in updating user data");
    }
  }
);
