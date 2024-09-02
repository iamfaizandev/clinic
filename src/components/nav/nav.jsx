import React, { useState } from "react";
import "./nav.css"; // Assume your CSS is saved in Navbar.css
import { NavLink } from "react-router-dom";

export function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`navbar  `}>
      <NavLink className="brand" to="/">
        Ab Dental
      </NavLink>

      <div
        className={`burger ${menuActive ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
      <div className={`menu ${menuActive ? "is-active" : ""}`}>
        <ul className="menu-inner">
          <li>
            <NavLink className="menu-item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-item" to="/aboutus">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-item" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bookappoint ms-4">
        <li>
          <button className="btn btn-primary text-white">
            <NavLink className="menu-item " to="/appointment">
              Book Now
            </NavLink>
          </button>
        </li>
      </div>
    </nav>
  );
}
