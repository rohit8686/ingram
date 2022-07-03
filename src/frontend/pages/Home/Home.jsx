import React, { useEffect } from "react";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Posts } from "../../components/Posts/Posts";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  );
};
