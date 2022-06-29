import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsData = createAsyncThunk(
  "post/posts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data;
    } catch (e) {
      return rejectWithValue("Error in fetching posts");
    }
  }
);

export const getPostsByPageData = createAsyncThunk(
  "post/postsByPage",
  async (pageNumber, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/posts/page/${pageNumber}`);
      return res.data;
    } catch (e) {
      return rejectWithValue("Error in fetching posts");
    }
  }
);

export const getPostById = createAsyncThunk(
  "post/postById",
  async (postId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);
      return res.data;
    } catch (e) {
      return rejectWithValue("Error in fetching posts");
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postText, postImage, encodedToken }, { rejectWithValue }) => {
    const postData = { content: { postText, postImage }, comments: [] };
    try {
      const res = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: encodedToken },
        }
      );
      return res.data;
    } catch (e) {
      return rejectWithValue("Error in creating post");
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ _id, text, encodedToken }, { rejectWithValue }) => {
    const commentData = { text };
    try {
      const res = await axios.post(
        `/api/comments/add/${_id}`,
        { commentData },
        {
          headers: { authorization: encodedToken },
        }
      );
      return { res, _id };
    } catch (e) {
      rejectWithValue("Error in adding comment");
    }
  }
);
