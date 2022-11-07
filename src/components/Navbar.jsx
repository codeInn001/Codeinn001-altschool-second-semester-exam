import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/nav.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(true);
  function displayMenu() {
    handleShow((prev) => !prev);
    console.log(show);
  }

  return (
    <nav className="nav">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigation menu</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="displays navigation menu" />
      </Helmet>
      <h1 className="heading">Codeinn's GitHub Repo</h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3 menu"
        onClick={displayMenu}
      >
        <path
          fillRule="evenodd"
          d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>

      <div className={show ? "nav-links" : "show"}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/repos">
          Repositories
        </Link>
        <Link className="nav-link" to="/repoInfo">
          RepoInfo
        </Link>
        <Link className="nav-link" to="/error boundary">
          Error
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
