import React from "react";
import { useEffect, useState } from "react";
import "../assets/styles/repositories.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



function Repositories({ repos }) {
  // const [repos, setRepos] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  const showLess = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <section className="repo-section">
      {repos === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        repos.map((repo) => {
          return (
            <div className="repo" key={repo.id}>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Codeinn001 Github Repositiries</title>
                <link rel="canonical" href="/" />
                <meta
                  name="description"
                  content="View codeinn001 github repositories"
                />
              </Helmet>
              <h2>{repo.name}</h2>
              <p>{repo.description ? showLess(repo.description) : ""}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Repo
              </a>
              <Link className="nav-link" to="/repoInfo">
                Repository details
              </Link>
            </div>
          );
        })
      )}
    </section>
  );
}

export default Repositories;
