import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/login", user);
      return res;
    } catch (error) {
      if (error.response.status === 404) {
        return rejectWithValue("Invalid Email or password");
      } else if (error.response.status === 401) {
        return rejectWithValue("Incorrect password");
      } else {
        return rejectWithValue("Login error");
      }
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/signup", user);
      return res;
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        return rejectWithValue("Email already exists");
      } else {
        return rejectWithValue("Signup error");
      }
    }
  }
);
