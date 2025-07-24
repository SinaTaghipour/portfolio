import React from "react";
import { Link } from "react-router-dom";
import "./Pages/componentsStyles/Footer.css"; 

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <ul className="social-icons">
        <li><a href="https://facebook.com"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="https://www.instagram.com/sina_taghipour_/"><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li><a href="https://www.linkedin.com/in/SinaTaghipour"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href="https://github.com/SinaTaghipour"><ion-icon name="logo-github"></ion-icon></a></li>
      </ul>

      <ul className="footer-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <p className="footer-text">© {year} My Portfolio</p>
    </footer>
  );
}

export default Footer;
