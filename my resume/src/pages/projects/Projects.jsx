import React, { useEffect, useState } from "react";
import './projects.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/projects")
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);


  return (
    <div className="project">
      <div className="head1">
        <h2>My Projects</h2>
        <div className="line"></div>
        <p>A showcase of projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>
      <div className="cards">
        {projects.map((project, i) => (
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
