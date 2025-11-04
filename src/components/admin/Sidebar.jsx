import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ for routing

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt", path: "/admin" },
    { id: "orders", label: "Product", icon: "fas fa-shopping-bag", path: "/admin/product" },
    { id: "products", label: "Products List", icon: "fas fa-leaf", path: "/admin/product-list" },
    { id: "customers", label: "Customers", icon: "fas fa-users", path: "/admin/users" },
    { id: "customers", label: "Orders", icon: "fas fa-users", path: "/admin/orders" },
  ];
      
  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <aside className="bg-[#fbf2f8] text-[#990000] w-72 min-h-screen shadow-lg relative overflow-hidden">
        {/* Header */}
        <div className="relative z-10 p-6 border-b border-[#dc8e8e]/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#dc8e8e]/20 rounded-xl flex items-center justify-center shadow">
              <i className="fas fa-seedling text-[#990000] text-xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#990000]">Paan Palace</h2>
              <p className="text-[#d76666] text-sm font-medium">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex flex-col p-4 gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.id}
                to={link.path}
                className={`group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 transform hover:scale-105 w-full ${
                  isActive
                    ? "bg-[#dc8e8e]/20 font-semibold shadow-inner border-l-4 border-[#990000]"
                    : "hover:bg-[#d76666]/10"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isActive ? "bg-[#dc8e8e]/30" : "bg-[#fbf2f8]"
                  }`}
                >
                  <i
                    className={`${link.icon} text-sm ${
                      isActive
                        ? "text-[#990000]"
                        : "text-[#d76666] group-hover:text-[#990000]"
                    }`}
                  ></i>
                </div>
                <span
                  className={`font-medium text-sm ${
                    isActive ? "text-[#990000]" : "text-[#d76666]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-[#dc8e8e]/40 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#dc8e8e]/20 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-[#990000] text-sm"></i>
              </div>
              <div>
                <p className="font-semibold text-[#990000] text-sm">Admin</p>
              </div>
            </div>
            <div className="mt-2 flex space-x-2">
              <button className="flex-1 bg-[#dc8e8e]/20 hover:bg-[#d76666]/20 text-[#990000] text-xs font-medium py-1 px-2 rounded-lg transition-all duration-200">
                <i className="fas fa-sign-out-alt mr-1"></i>
                Logout
              </button>
              <button className="bg-[#dc8e8e]/20 hover:bg-[#d76666]/20 text-[#990000] text-xs font-medium py-1 px-2 rounded-lg transition-all duration-200">
                <i className="fas fa-user-cog"></i>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
