import React from "react";
import "./componentsStyles/ProjectCards.css";
import simonImg from "../assets/simon.png";
import keeperImg from "../assets/keeper.png";
import todoImg from "../assets/to-do.png";

const projects = [
  {
    title: "Simon Game",
    description: "A classic memory game built with JavaScript and jQuery.",
    image: simonImg,
    link: "https://github.com/SinaTaghipour/simon-game"
  },
  {
    title: "Keeper App",
    description: "A simple note-keeping app using React.",
    image: keeperImg,
    link: "https://github.com/SinaTaghipour/keeper-app"
  },
  {
    title: "To-Do List",
    description: "Track your daily tasks in a clean, responsive UI.",
    image: todoImg,
    link: "https://github.com/SinaTaghipour/neon-todo"
  }
];

function ProjectCards() {
  return (
    <section className="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;
