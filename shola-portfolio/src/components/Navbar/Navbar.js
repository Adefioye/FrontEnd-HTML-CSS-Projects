import React from "react";
import { Person, Email } from "@material-ui/icons";
import "./Navbar.css";

function Navbar({ menuOpen, setMenuOpen, openMenu }) {
  return (
    <div className={`navbar ${openMenu}`} id="navbar">
      <div className="container">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            &nbsp;<span>+2348142979664</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            &nbsp;<span>adesholadnj@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
