import React from "react";
import "./componentsStyles/EducationCard.css";

function EducationCard({ title, subtitle, description, duration }) {
  return (
    <div className="education-card">
      <div className="edu-header">
        <h3>{title}</h3>
        <span className="edu-duration">{duration}</span>
      </div>
      <h4 className="edu-subtitle">{subtitle}</h4>
      <p className="edu-description">{description}</p>
    </div>
  );
}

export default EducationCard;
