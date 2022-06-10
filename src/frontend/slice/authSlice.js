import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../thunks/authThunks";

const initialState = {
  isLoading: false,
  errorMsg: "",
  userData: "",
  encodedToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorMsg: (state) => {
      state.errorMsg = "";
    },
    logout: (state) => {
      state.errorMsg = "";
      state.userData = "";
      state.encodedToken = "";
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload.data.foundUser;
      state.encodedToken = action.payload.data.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload.data.createdUser;
      state.encodedToken = action.payload.data.encodedToken;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
  },
});

export const { clearErrorMsg, logout } = authSlice.actions;
export default authSlice.reducer;
