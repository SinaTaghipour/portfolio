import React from "react";
import { Link } from "react-router-dom";
import EducationCard from "./EducationCard";
import PageWrapper from "./PageWrapper";

import "./componentsStyles/Blog.css";
import "./componentsStyles/AboutSummary.css";

function Blog() {
  return (
    <PageWrapper>
    <section id="body">
      <main className="container">

        {/* About Summary Section */}
        <div className="about-summary mb-5">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">About me</h1>
            <p className="about-text">
              My name is <strong>Sina</strong>, and I was born in the city of Ahvaz, Iran. From a young age, I was fascinated by computers and the world of video games, which sparked my deep interest in technology...
            </p>
            <Link
              to="/About"
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">Continue reading...</span>
            </Link>
          </div>
        </div>

        {/* Education & Courses Section */}
        <div className="education-section">
          <h2 className="mb-4">Education & Courses</h2>

          <EducationCard
            title="Azad University of Karaj"
            subtitle="B.Sc. in Computer Engineering"
            description="Focused on software development, data structures, and systems programming. Learned to solve real-world problems using Python and web technologies."
            duration="2021 – Present"
          />

          <EducationCard
            title="The Complete Full-Stack Web Development Bootcamp"
            subtitle="Instructor: Angela Yu (Udemy)"
            description="Covered full-stack web development including HTML, CSS, JavaScript, Node.js, MongoDB, Express, and React."
            duration="2025"
          />
        </div>

      </main>
    </section>
    </PageWrapper>
  );
}

export default Blog;
