import React from 'react'
import './skill.scss'

const techStack = [
  {
    category: "Frontend",
    items: [
      { src: "html.png", alt: "HTML" },
      { src: "css.png", alt: "CSS" },
      { src: "sass.png", alt: "SASS" },
      { src: "reactjs.png", alt: "ReactJS" },
      { src: "javascript.png", alt: "JavaScript" },
    ],
  },
  {
    category: "Backend",
    items: [
      { src: "nodejs.png", alt: "Node.js" },
      { src: "express.png", alt: "Express.js" },
      { src: "mysql.png", alt: "MySQL" },
      { src: "mongodb.png", alt: "MongoDB" },
    ],
  },
  {
    category: "Languages",
    items: [
      { src: "python.png", alt: "Python" },
      { src: "java.png", alt: "Java" },
      { src: "javascript.png", alt: "JavaScript" },
    ],
  },
  {
    category: "Tools",
    items: [
      { src: "vscode.png", alt: "VS Code" },
      { src: "git.png", alt: "Git" },
      { src: "github.png", alt: "GitHub" },
      { src: "netlify.png", alt: "Netlify" },
    ],
  },
];



const Skills = () => {
  return (
    <>
    <div className="skills">
      <div className="head">
        <h2>My Skills</h2>
        <div className="line"></div>
        <p>A collection of my technical skills honed through various projects and experience</p>
      </div>
      <div className="cards">
      {techStack.map((stack, i) => (
        <div className="card" key={i}>
          <div className="title">
            <h2>{stack.category}</h2>
          </div>
          <div className="contain">
            {stack.items.map((tool, j) => (
              <div className="cardmini">
                <div className="img">
                  <img
                  key={j}
                  src={`./tech_logo/${tool.src}`}
                  className="techlogo"
                />
                </div>
                <h5>{tool.alt}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
</div>

    </div>
    </>
  )
}

export default Skills
