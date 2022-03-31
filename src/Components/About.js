import React from "react";
import htmlimg from "../Images/html.png";
import cssimg from "../Images/css.png";
import jsimg from "../Images/js.png";
import reactimg from "../Images/react.jpg";
import mongoimg from "../Images/mongo.png";
import gitimg from "../Images/git.png";
import titleimg from "../Images/title.png";
import "./style.css";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="about">
        <h1 className="under">About Me</h1>

        <p>
          I'm an aspiring web designer and full stack web developer with good
          knowledge in web development. I like designing & developing visually
          attractive User Interfaces. My major focus is on designing web, mobile
          & tablet interfaces. I also have good communication and adaptability skills.
        </p>

        <p>
          I always like to take up challenges. I like to solve complex problems.
          My hobbies are playing cricket, watching movies and TV Series,
          listening music & surfing web.
        </p>
      </div>
      <div className="TechnologyContainer">
        <p id="lang">Languages/Technology</p>

        <ul type='none' className="TechImages">
          <li>
            <img className="techimg" src={htmlimg} alt="" />
          </li>
          <li>
            <img className="techimg" src={cssimg} alt="" />
          </li>
          <li>
            <img className="techimg" src={jsimg} alt="" />
          </li>
          <li>
            <img className="techimg" src={reactimg} alt="" />
          </li>
          <li>
            <img className="techimg" src={mongoimg} alt="" />
          </li>
          <li>
            <img className="techimg" src={gitimg} alt="" />
          </li>
        </ul>
      </div>
      <span>
        <img className="aboutimage" src={titleimg} alt="" />
      </span>

    </div>
    
  );
};

export default About;
