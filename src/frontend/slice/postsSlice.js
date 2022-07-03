import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsData,
  createPost,
  addComment,
  getPostsByPageData,
  getPostById,
  likePost,
  dislikePost,
  getPostsByUser,
  getPostsByUserForProfile,
} from "../thunks/postsThunks";

const initialState = {
  showSidebar: false,
  posts: [],
  userPosts: [],
  userPostsForProfile: [],
  paginatedPosts: [],
  singlePostData: {},
  errorMsg: "",
  isLoading: false,
  isPaginateLoading: false,
  totalPosts: null,
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

    [getPostsByPageData.pending]: (state) => {
      state.isPaginateLoading = true;
    },
    [getPostsByPageData.fulfilled]: (state, action) => {
      state.isPaginateLoading = false;
      state.paginatedPosts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
    },
    [getPostsByPageData.rejected]: (state, action) => {
      state.isPaginateLoading = false;
      state.errorMsg = action.payload;
    },

    [getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singlePostData = action.payload.post;
    },
    [getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },

    [getPostsByUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsByUser.fulfilled]: (state, action) => {
      state.userPosts = action.payload.posts;
    },
    [getPostsByUser.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [getPostsByUserForProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostsByUserForProfile.fulfilled]: (state, action) => {
      state.userPostsForProfile = action.payload.posts;
    },
    [getPostsByUserForProfile.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
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

    [likePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },

    [dislikePost.fulfilled]: (state, action) => {
      state.posts = action.payload.data.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      state.errorMsg = action.payload;
    },
  },
});

export const { setShowSidebar } = postsSlice.actions;
export default postsSlice.reducer;
