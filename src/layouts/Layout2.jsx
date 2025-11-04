import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import EduHeader from "../components/Header";
const Layout2 = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // adjust if homepage path is different

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header for other pages only */}
      {!isHomePage && <EduHeader />}

      {/* Main Content */}
      <main className="">
        <Outlet />  {/* Pages render here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout2;
