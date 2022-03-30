import React from "react";
import "./style.css";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";

const Portfolio = () => {
  return (
    <div className="PortfolioContainer">
      <div className="portfolio">
        <h1 id="port" className="under">
          My Portfolio
        </h1>
      </div>
      <div className="portimages">
        <img className="img1" src={image1} alt="" />
        <img className="img1" src={image2} alt="" />
        <img className="img1" src={image3} alt="" />
      </div>
      <div className="portimages">
        <img className="img2" src={image4} alt="" />
        <img className="img2" src={image5} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
