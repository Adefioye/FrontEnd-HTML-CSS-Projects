import React, { useState } from "react";
// Import components
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = menuOpen ? "active" : "";

  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openMenu={openMenu}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} openMenu={openMenu} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
