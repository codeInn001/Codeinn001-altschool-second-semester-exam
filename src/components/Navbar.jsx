import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/nav.css";

function Navbar() {
  return (
    <nav className="nav">
      <h1 className="heading">Codeinn's GitHub Repo</h1>

      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/repos">Repositories</Link>
        <Link className="nav-link" to="/repoInfo">Repository Info</Link>

      </div>
    </nav>
  );
}

export default Navbar;
