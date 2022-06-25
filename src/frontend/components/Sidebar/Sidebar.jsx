import React from "react";
import { useSelector } from "react-redux";
import { SidebarContent } from "../SidebarContent/SidebarContent";

export const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.posts);

  return (
    <>
      {showSidebar && (
        <div className="p-2 md:w-1/5 md:hidden">
          <SidebarContent />
        </div>
      )}
      <div className="hidden p-2 md:block md:w-1/5">
        <SidebarContent />
      </div>
    </>
  );
};
