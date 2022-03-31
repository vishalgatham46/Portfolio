import React from "react";
import "./style.css";


const Projects = () => {
  return (
    <div className="ProjectsContainer">
      <h1 id="resumehead" className="under">
        My Projects
      </h1>
      <div className="college">
        <h2>Projects</h2>
        <hr />
        <h3 className="collagename">The Siren (Blog)</h3>
        <p className="course">React, JavaScript, HTML, CSS</p>
        <a
          href="https://cranky-yonath-42ad24.netlify.app/"
          className="ProjectLink"
          target="blank"
          rel="noopener noreferrer"
        >
          Visit the Page
        </a>
        <div className="vline2 projectline2"></div>
        <div className="vline projectline1"></div>
      </div>
      <div className="college projectBlock">
        <hr />
        <h3 className="collagename">The TODO App</h3>
        <p className="course">JavaScript, HTML, CSS</p>
        <a
          href="https://vishalgatham46.github.io/todoappjs/"
          className="ProjectLink"
          target="blank"
          rel="noopener noreferrer"
        >
          Visit the Page
        </a>
        <div className="vline2 projectline2"></div>
        <div className="vline projectline1"></div>
      </div>
      <div className="college">
        <hr />
        <h3 className="collagename">Clock Project</h3>
        <p className="course">JavaScript, HTML, CSS</p>
        <a
          href="https://vishalgatham46.github.io/clockproject/"
          className="ProjectLink"
          id="Linkanim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Page
        </a>
        <div className="vline2 projectline2"></div>
        <div className="vline projectline1"></div>
      </div>
    </div>
  );
};

export default Projects;
