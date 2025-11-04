import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";


const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content wrapper */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />
        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
