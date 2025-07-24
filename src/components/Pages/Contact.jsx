import React from "react";
import PageWrapper from "./PageWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import "./componentsStyles/Contact.css";

function Contact() {
  return (
  <PageWrapper>
    <section id="hero">
      <div className="container">
        <h1 className="mb-3 TimesNewRoman">Contact Me</h1>

        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div className="list-group">

            {/* Email */}
            <a
              href="mailto:sinataghipour03@gmail.com"
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="mailto:sinataghipour03@gmail.com" />
              </svg>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">Email Address</h6>
                  <p className="mb-0 opacity-75">sinataghipour03@gmail.com</p>
                </div>
                <small className="opacity-50 text-nowrap">Active</small>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/SinaTaghipour"
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="https://www.linkedin.com/in/SinaTaghipour" />
              </svg>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">LinkedIn</h6>
                  <p className="mb-0 opacity-75">SinaTaghipour</p>
                </div>
                <small className="opacity-50 text-nowrap">Active</small>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SinaTaghipour"
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="https://github.com/SinaTaghipour" />
              </svg>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">GitHub</h6>
                  <p className="mb-0 opacity-75">SinaTaghipour</p>
                </div>
                <small className="opacity-50 text-nowrap">Active</small>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
  );
}

export default Contact;
