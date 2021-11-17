import React from "react";
// Import components
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
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
