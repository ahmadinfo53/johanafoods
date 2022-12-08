import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">JOHANA FOODS</h2>
      <ul>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#locations">Locations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
