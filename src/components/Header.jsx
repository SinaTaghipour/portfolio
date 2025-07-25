import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Pages/componentsStyles/Header.css";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-shadow bg-light">
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <Link to="/" className="fs-4 fw-bold text-dark text-decoration-none">
          My Portfolio
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
        <div
  className={`hamburger ${isOpen ? "open" : ""}`}
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle navigation"
>
  <span></span>
  <span></span>
  <span></span>
</div>

        </button>

        {/* Menu */}
        <nav className={`nav-pills d-md-flex ${isOpen ? "d-flex flex-column" : "d-none d-md-flex"}`}>
          {["/", "/projects", "/blog", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Projects", "Blog", "About Me", "Contact Me"];
            return (
              <Link
                key={path}
                to={path}
                className={`nav-link rounded-pill mx-1 ${
                  isActive(path) ? "text-bg-dark" : "text-dark"
                }`}
                onClick={() => setIsOpen(false)} // close on click
              >
                {names[i]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
