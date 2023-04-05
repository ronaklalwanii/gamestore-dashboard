import React, { useState } from "react";

// Layout Components
import LayoutNavbar from "./navbar";
import LayoutSidebar from "./sidebar";
import FriendsList from "./FriendsList";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="layout min-h-screen flex bg-gray-850 text-white">
      <LayoutSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="flex flex-col px-10 w-full">
        <LayoutNavbar setSidebarOpen={setSidebarOpen} />
        <div className="content py-12">{children}</div>
      </div>
      <FriendsList />
    </div>
  );
};

export default Layout;
