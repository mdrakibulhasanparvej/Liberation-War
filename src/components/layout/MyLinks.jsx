import React from "react";
import { NavLink } from "react-router-dom";

const MyLinks = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#4c9b6e] border-b-2 border-[#4c9b6e]"
          : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
