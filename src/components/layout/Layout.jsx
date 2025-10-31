import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-6">
        {/* Outlet will render child pages */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
