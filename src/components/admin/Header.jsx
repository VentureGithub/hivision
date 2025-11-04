import React from "react";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text ">
        My Dashboard
      </h1>

      {/* Right side - notifications + profile */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 text-gray-600 hover:text-green-600 transition">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer group relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-green-500 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-gray-800 font-semibold text-sm group-hover:text-green-600">
              Admin 
            </span>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-12 w-36 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-100 rounded-t-lg">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-100 rounded-b-lg">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
