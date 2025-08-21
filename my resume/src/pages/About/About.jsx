import React from 'react'
import './about.scss'
import person from '/rishi.png'
import { ReactTyped } from "react-typed";

const About = () => {
  return (
   <>
   <div className="about">
    <div className="shape3"></div>
    <div className="shape3 s3"></div>
    <div className="shape4 s4"></div>
    <div className="shape4"></div>
    <div className="shape5">
      <svg
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 0 
         C70 40, 100 40, 120 60 
         C80 70, 80 100, 60 120 
         C50 80, 20 80, 0 60 
         C40 50, 40 20, 60 0 Z"
      fill="white"
    />
  </svg>
    </div>
    <div className="abouttxt">
      <div className="content">
        <h3>Hi, I am</h3>
      <h1>Rishi Srivastava</h1>
      <h4>I am a <span><ReactTyped
          strings={[
            "Full Stack Developer",
            "UI/UX Enthusiast",
            "Problem Solver",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        /></span>
      </h4>
      <p>Exploring the world of technology with hands-on projects in web development, 
        databases, and full stack applications. Always curious to learn, create, 
        and bring ideas to life. <br />
        Apart from coding, I actively take part in leadership activities and 
        environmental initiatives, striving to create an impact both in tech 
        and society.
      </p>
       <a href="/resume.pdf" download="Rishi_Srivastava_Resume.pdf">
       <button>Download CV</button></a>
      </div>
    </div>
    <div className="aboutimg">
          <div className="modernpotrait">
            <div className="shape1"></div>
            <div className="shape2">
              <img src="rishi.png" alt="" />
            </div>
          </div>
    </div>
   </div>
   </>
  )
}

export default About
