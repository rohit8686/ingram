import { createSlice } from "@reduxjs/toolkit";
import { getPostsData, createPost, addComment } from "../thunks/postsThunks";

const initialState = {
  showSidebar: false,
  posts: [],
  errorMsg: "",
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
  extraReducers: {
    [getPostsData.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
    },
    [getPostsData.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [createPost.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },
    [addComment.fulfilled]: (state, action) => {
      const { res, _id } = action.payload;
      const comments = res.data.comments;
      state.posts = state.posts.map((post) =>
        post._id === _id ? { ...post, comments } : post
      );
    },
    [addComment.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { setShowSidebar } = postsSlice.actions;
export default postsSlice.reducer;
