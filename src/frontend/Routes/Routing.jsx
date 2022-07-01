import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { Bookmarks } from "../pages/Bookmarks/Bookmarks";
import { Explore } from "../pages/Explore/Explore";
import { Login } from "../pages/Login/Login";
import { Notifications } from "../pages/Notifications/Notifications";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Signup } from "../pages/Signup/Signup";
import { SinglePost } from "../components/SinglePost/SinglePost";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Route>
    </Routes>
  );
};
