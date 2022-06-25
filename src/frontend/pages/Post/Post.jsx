import React from "react";
import { ToastContainer } from "react-toastify";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { FollowSuggestions } from "../../components/FollowSuggestions/FollowSuggestions";
import { Posts } from "../../components/Posts/Posts";
import { Search } from "../../components/Search/Search";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Post = () => {
  return (
    <div>
      <CreatePost />
      <Posts />
    </div>
  );
};
