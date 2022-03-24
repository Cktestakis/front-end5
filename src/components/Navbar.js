import React from "react";
import { NavLink } from "react-router-dom";

import "normalize.css";
import "../styles/App.css";

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
              About
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/cody-ktestakis/">
            <img className="linkedIcon" src={LiIcon} alt="linkedin-icon" />
          </a>
          <a href="https://github.com/Cktestakis">
            <img className="gitIcon" src={GitIcon} alt="github-icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
