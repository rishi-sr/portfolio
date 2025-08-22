import React, { useState, useEffect } from 'react'
import './navbar.scss'
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

// Smooth scroll function
const handleScroll = (sectionId, setMenuOpen) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  if (setMenuOpen) setMenuOpen(false); // close mobile menu
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src="rs.png" alt="logo" />
        <h2>Rishi Srivastava</h2>
      </div>

      {/* Links (desktop + mobile) */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about", setMenuOpen); }}>About</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll("skills", setMenuOpen); }}>Skills</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll("projects", setMenuOpen); }}>Projects</a>
        <a href="#education" onClick={(e) => { e.preventDefault(); handleScroll("education", setMenuOpen); }}>Education</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact", setMenuOpen); }}>Contact Me</a>
      </div>

      {/* Social (desktop only) */}
      <div className="social">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  )
}

export default Navbar;
