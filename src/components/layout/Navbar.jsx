import React from "react";
import { Link, Links, NavLink } from "react-router-dom";
import MyLinks from "./MyLinks";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="navbar sticky top-0 z-50 bg-base-100 pr-5 md:px-10 text-gray-600 border-b border-gray-300 shadow-md">
        <div className="navbar-start">
          <div className="dropdown pr-2 ">
            <div
              tabIndex={0}
              role="button"
              className="-pl-5 btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLinks to="/">Home</MyLinks>
              </li>
              <li>
                <MyLinks to="/documents">Documents</MyLinks>
              </li>
              <li>
                <MyLinks to="/interviews">Interviews</MyLinks>
              </li>
              <li>
                <MyLinks to="/photographs">Gellary</MyLinks>
              </li>
              <li>
                <MyLinks to="/contact">Contact</MyLinks>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl text-[#4c9b6e] font-extrabold">
            Libration War
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="font-bold menu menu-horizontal px-1">
            <li>
              <MyLinks to="/">Home</MyLinks>
            </li>
            <li>
              <MyLinks to="/documents">Documents</MyLinks>
            </li>
            <li>
              <MyLinks to="/interviews">Interviews</MyLinks>
            </li>
            <li>
              <MyLinks to="/photographs">Gellary</MyLinks>
            </li>
            <li>
              <MyLinks to="/contact">Contact</MyLinks>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
