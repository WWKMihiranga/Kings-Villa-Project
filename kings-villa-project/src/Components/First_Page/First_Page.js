import React, { useState } from "react";
import "./nav-bar.css";
import "./kingsWilla.jpg";

export default function First_Page() {
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    //TogglerIcon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <div className="background-container">
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
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className="headline">
        <h1>KINGS WILLA</h1>
        <p>When life style embracess luxury</p>
      </div>
    </div>
  );
}
