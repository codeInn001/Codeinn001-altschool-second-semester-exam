import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/nav.css";
import { Helmet } from "react-helmet";



function Navbar() {
  return (
    <nav className="nav">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigation menu</title>
        <link rel="canonical" href="/" />
        <meta
          name='description'
          content='displays navigation menu'
        />
      </Helmet>
      <h1 className="heading">Codeinn's GitHub Repo</h1>

      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/repos">Repositories</Link>
        <Link className="nav-link" to="/repoInfo">RepoInfo</Link>
        <Link className="nav-link" to="/error boundary">Error</Link>

      </div>
    </nav>
  );
}

export default Navbar;
