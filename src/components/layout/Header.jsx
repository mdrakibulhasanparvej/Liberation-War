import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-base-200 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Liberation War Archive</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
