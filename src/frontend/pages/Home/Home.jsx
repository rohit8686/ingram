import React from "react";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Posts } from "../../components/Posts/Posts";

export const Home = () => {
  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  );
};
