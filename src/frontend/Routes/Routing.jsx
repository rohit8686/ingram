import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};
