import React from "react";
import { NavLink } from "react-router-dom";

import "normalize.css";
import "../styles/App.scss";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <p className="initials animation" to="/">
          CK
        </p>
        <ul className="navBtnCont">
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/">
              Features
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/portfolio">
              Domains
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/contact">
              Pricing
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/resume">
              Enterprise
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
