import React, { useEffect, useState } from "react";
import './projects.scss';

const projectsData = [
  {
    name: "Stone Paper Scissors",
    url: "sps.png",
    link: "https://sunny-duckanoo-3ba47b.netlify.app/",
    p: "This is a Stone Paper Scissors game where you play against the computer by choosing stone, paper, or scissors. It shows both scores in real-time with a clean and interactive design.",
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    name: "Green Gold Club E-Commerce Website",
    url: "ggc.png",
    link: "https://sunny-duckanoo-3ba47b.netlify.app/",
    p: "A full-stack e-commerce platform for eco-friendly products, designed for Green Gold Club. It features product listings, cart, and secure checkout, along with responsive design for better accessibility.",
    skills: ["Reactjs", "Expressjs", "MongoDB", "Nodejs"]
  },
  {
    name: "HeritEdge",
    url: "herit.png",
    link: "https://sunny-duckanoo-3ba47b.netlify.app/",
    p: "A cultural heritage web app showcasing India’s rich traditions. It includes information pages, user accounts, and interactive sections to explore festivals, arts, and culture.",
    skills: ["Reactjs", "Expressjs", "MongoDB", "Nodejs"]
  },
  {
    name: "Food Recipe Site",
    url: "fr.png",
    link: "https://foodrecipesweb.netlify.app/",
    p: "A recipe website where users can browse and explore different cuisines. It provides ingredients, step-by-step cooking methods, and a clean responsive design.",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  


  return (
    <div className="project">
      <div className="head1">
        <h2>My Projects</h2>
        <div className="line"></div>
        <p>A showcase of projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>
      <div className="cards">
        {projectsData.map((project, i) => (
          <div className="card" key={i}>
            <div className="img">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.url} alt={project.name} />
              </a>
            </div>
            <div className="name"><h2>{project.name}</h2></div>
            <div className="para"><p>{project.p}</p></div>
            <div className="skills">
              {project.skills.map((skill, j) => (
                <p key={j}>{skill}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
