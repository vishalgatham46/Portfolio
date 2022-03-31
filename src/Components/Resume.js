import React from "react";
import "./style.css";
import Projects from './Projects';

import image6 from "../Images/Vishal Gatham.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMail } from "react-icons/io5";



const Resume = () => {
  return (
    <>
    <div className="ResumeContainer">
      <h1 id="resumehead" className="under">
        Resume
      </h1>
      <div className="college">
        <h2>Courses</h2>
        <hr />
        {/* <br /> */}
        <h3 className="collagename">Full Stack Web Development</h3>
        <p className="course">MERN Stack</p>
        <p id="year">2021-2022</p>
        <p className="courseabout">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          quia.
        </p>
        <div className="vline2"></div>
        <div className="vline"></div>
      </div>
      <div className="college">
        <h2>Education</h2>
        <hr />
        {/* <br /> */}
        <h3 className="collagename">CVR College of Engineering</h3>
        <p className="course">Computer Science Engineering</p>
        <p id="year">2016-2020</p>
        <p className="courseabout">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          quia.
        </p>
        <div className="vline2"></div>
        <div className="vline"></div>
      </div>

      <div className="resumeimage">
        <img className="img4" src={image6} alt="" />
        <div className="Profilelinks">
          <a href="mail">
            {/* <i> */}
            <IoMail />
            {/* </i> */}
          </a>
          <a href="phone">
            {/* <i> */}
            <FaPhoneAlt />
            {/* </i> */}
          </a>
          <a href="https://www.linkedin.com/in/vishal-gatham-945509186/" target="blank" rel="noopener noreferrer">
            {/* <i> */}
            <BsLinkedin />
            {/* </i> */}
          </a>
          <a href="https://github.com/vishalgatham46" target="blank" rel="noopener noreferrer"> 
            {/* <i> */}
            <BsGithub />
            {/* </i> */}
          </a>
        </div>
      </div>
    </div>
    <Projects/>
    </>
  );
};

export default Resume;
