import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="menu menu-horizontal p-0">
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/documents">Documents</NavLink>
      </li>
      <li>
        <NavLink to="/interviews">Interviews</NavLink>
      </li>
      <li>
        <NavLink to="/photographs">Photographs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
