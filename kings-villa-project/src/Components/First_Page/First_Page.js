import React, { useState } from "react";
import "./nav-bar.css";
export default function First_Page() {
  const [active, setActive] = useState("navMenu");
  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");
  };

  return (
    <nav className="navbar">
      <a href="#" className="brand">
        Kings Willa
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="" className="nav-links">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-links">
            Rooms
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-links">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-links">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
