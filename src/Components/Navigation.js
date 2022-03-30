import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <div className="NavigationContainer">
      <h1 className="topname">Vishal Gatham</h1>
      <div className="navbar">
        <Link className="links" to="/home">Home</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/portfolio">Portfolio</Link>
        <Link className="links" to="/resume">Resume</Link>
        <Link className="links" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
