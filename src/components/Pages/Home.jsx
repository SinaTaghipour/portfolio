import React from "react";
import RotatingText from "./RotatingText";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

import "./componentsStyles/Home.css";

function Home() {
  return (
    <PageWrapper>
      <section id="hero">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

            {/* Profile Image */}
            <div className="col-10 col-sm-8 col-lg-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/Sina.png`}
                className="d-block mx-lg-auto img-fluid profile"
                alt="Sina"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Hero Text */}
            <div className="col-lg-8">
              <h2 className="homeTopic TimesNewRoman mb-3">
                Hi, my name is Sina
              </h2>

              {/* Rotating Text Section */}
              <div className="rotating-container TimesNewRoman mb-4">
                <span className="label-text">I am a</span>
                <RotatingText
                  texts={[
                    "Full-Stack Web Developer",
                    "Chef",
                    "Gamer",
                    "Student",
                  ]}
                  mainClassName="rotating-role"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              {/* About Text */}
              <p className="lead homeAbout TimesNewRoman">
                I am a motivated programmer with a keen interest in software
                development and problem-solving. My experience includes website
                programming, and I have worked on several projects in this area.
                I am currently seeking work experience. Additionally, I have a
                strong passion for teamwork and welcome the opportunity to work
                with motivated and talented individuals.
              </p>

              {/* Buttons */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="/projects"
                  className="btn btn-outline-primary btn-lg px-4 rounded-pill mx-1 btn-dark"
                  style={{ color: "antiquewhite"}}
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-secondary btn-lg px-4 rounded-pill mx-1"
                  style={{ color: "rgba(0, 23, 71, 1)" }}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature"></section>
    </PageWrapper>
  );
}

export default Home;
