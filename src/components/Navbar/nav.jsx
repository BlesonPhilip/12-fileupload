import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <h3>Files</h3>
        </div>
        <div className="right">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/upload" className="navlink">
            Upload
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
