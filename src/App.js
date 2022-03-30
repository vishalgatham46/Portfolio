import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import "./Components/style.css";

const App = () => {
  return (
    // <div>
    <Router>
      <Navigation />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    // </div>
  );
};

export default App;
