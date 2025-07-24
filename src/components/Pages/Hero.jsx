import React from "react";
// import sinaImage from "../Images/Sina3.png"; // adjust path as needed
import "./componentsStyles/Hero.css";
function Hero() {
  return (
    <section id="hero">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={sinaImage}
              className="d-block mx-lg-auto img-fluid sina"
              alt="Sina Taghipour"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="workTopic mb-3">
              Hi, my name is Sina and I am a web developer
            </h2>
            <p className="lead">
              I am a motivated programmer with a keen interest in software
              development and problem-solving. My experience includes website
              programming, and I have worked on several projects in this area. I
              am currently seeking work experience. Additionally, I have a
              strong passion for teamwork and welcome the opportunity to work
              with motivated and talented individuals.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Hire Me
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                See Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
