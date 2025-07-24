import React from "react";
import EducationCard from "./EducationCard";
import PageWrapper from "./PageWrapper";

import "./componentsStyles/About.css";

function About() {
  return (
  <PageWrapper>
    <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          My name is <strong>Sina</strong>, and I was born in the city of Ahvaz, Iran. From a young age, I was fascinated by computers and the world of video games, which sparked my deep interest in technology.
        </p>
        <p className="about-text">
          I pursued my passion by studying <strong>Computer Engineering</strong> at Azad University of Karaj. My decision to enter this field was driven by my love for solving problems and tackling technical challenges. I’ve always enjoyed the process of building, debugging, and improving systems that make a real impact.
        </p>
        <p className="about-text">
          Throughout my journey, I've worked on various web development projects that allowed me to grow both technically and creatively. Today, I continue to explore new technologies and strive to become a better engineer every day.
        </p>
        <p className="about-text">
          I believe in continuous learning, teamwork, and pushing boundaries—and I’m always excited to connect with like-minded individuals and contribute to meaningful projects.
        </p>
      </div>
    </section>
  </PageWrapper>

  );
}

export default About;
