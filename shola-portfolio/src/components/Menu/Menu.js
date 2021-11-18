import React from "react";
import "./Menu.css";
import MenuList from "./MenuList";

function Menu({ menuOpen, setMenuOpen, openMenu }) {
  return (
    <div className={`menu ${openMenu}`}>
      <MenuList
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openMenu={openMenu}
      />
    </div>
  );
}

export default Menu;
