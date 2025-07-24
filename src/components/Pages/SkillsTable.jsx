import React from "react";
import ProjectCards from './ProjectCards';
import PageWrapper from "./PageWrapper";

import "./componentsStyles/SkillsTable.css";

function SkillBar({ name, rating }) {
  return (
    <div className="skill-card mb-3 p-3 rounded shadow-sm">
      <div className="d-flex justify-content-between">
        <strong>{name}</strong>
        <span>{rating}/5</span>
      </div>
      <div className="progress mt-2" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-gradient"
          role="progressbar"
          style={{ width: `${(rating / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

const categorizedSkills = [
  {
    category: "Front-End",
    skills: [
      { name: "HTML/CSS", rating: 4 },
      { name: "JavaScript", rating: 4 },
      { name: "React", rating: 3 },
      { name: "Bootstrap", rating:3 },
      { name: "jQuery", rating: 3 },
    ],
  },
  {
    category: "Back-End",
    skills: [
      { name: "Node.js", rating: 3 },
      { name: "Express.js", rating: 3 },
      { name: "OAuth 2.0", rating: 2 },
      { name: "RESTful APIs", rating: 3 },
      { name: "SQL", rating: 3 },
      { name: "PostgreSQL", rating: 3 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", rating: 3 },
      { name: "Bash", rating: 3 },
    ],
  },
];


function SkillsTable() {
  return (
    <PageWrapper>
    <section id="skills" className="py-5 text-dark">
  <ProjectCards />
  <div className="container bg-light">
    <h2 className="text-center mb-5">My Web Development Skills</h2>
    <div className="row">
      {categorizedSkills.map((section, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <h4>{section.category}</h4>
          {section.skills.map((skill, i) => (
            <SkillBar key={i} name={skill.name} rating={skill.rating} />
          ))}
        </div>
      ))}
    </div>
  </div>
</section>
</PageWrapper>
  );
}

export default SkillsTable;
