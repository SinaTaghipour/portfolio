import React from "react";
import { Link } from "react-router-dom";
import "./componentsStyles/NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p className="mb-3">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-dark rounded-pill">Back to Home</Link>
    </div>
  );
}

export default NotFound;
