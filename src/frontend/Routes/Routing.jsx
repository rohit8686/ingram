import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Signup/Signup";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
