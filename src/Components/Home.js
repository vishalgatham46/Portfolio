import React from 'react'
import "./style.css";
import aboutimg from '../Images/aboutimg.png'
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
// import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


function resumeFunction(){
    window.open("https://drive.google.com/file/d/111WS9WQxRa6bfk1iSYToNMH52iSzldaR/view");
}


const Home = () => {
  return (
  <>
        <div className="HomeContainer">
            <div className="home">
                <p id="name">Hi, I am Vishal Gatham</p>
                <p id="role">A Full Stack Web Developer</p><br/>
                <p id="bio">Turning your ideas into Reality.</p><br/>
                <button id="hirebtn" type="button">Hire Me</button>
                <button id="resumebtn" type="button" onClick={resumeFunction}>Get Resume</button>
            </div>
            <span className="containerimage">
                <img src={aboutimg} alt=""/>
            </span>
        </div>
        <About/>
        <Portfolio/>
        <Resume/>
        {/* <Projects/> */}
        <Contact/>
        <Footer/>
        </>

  )
}

export default Home