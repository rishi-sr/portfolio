import React from "react";
import Navbar from "./pages/navbar/Navbar";
import About from "./pages/About/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contactus/Contact";
import Footer from "./pages/footer/Footer";
import './App.scss'

function App() {
  return (
    <>
      <div className="triangle-bg"></div>
      <Navbar />
      <div id="about" >
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
