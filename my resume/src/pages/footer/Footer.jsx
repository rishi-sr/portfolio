import React from 'react';
import './footer.scss';

const handleScroll = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll("skills"); }}>Skills</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll("projects"); }}>Projects</a>
        <a href="#education" onClick={(e) => { e.preventDefault(); handleScroll("education"); }}>Education</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>Contact</a>
      </div>
      
      <div className="footer-copyright">
        <p>©2025 Rishi Srivastava | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
