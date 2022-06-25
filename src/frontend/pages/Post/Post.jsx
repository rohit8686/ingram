import React from "react";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Posts } from "../../components/Posts/Posts";

export const Post = () => {
  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  );
};
