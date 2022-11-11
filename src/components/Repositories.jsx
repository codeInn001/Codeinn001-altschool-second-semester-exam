import React from "react";
import { useEffect, useState } from "react";
import "../assets/styles/repositories.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Pagination from "./Pagination";

function Repositories({ repos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);

  const indexOfLastRepo = currentPage * reposPerPage;
  const IndexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const currentRepos = repos.slice(IndexOfFirstRepo, indexOfLastRepo);
  const pageNumbers = Math.ceil(repos.length / reposPerPage) + 1;

  const showLess = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <div>
        <section className="repo-section">
          {repos === "loading" ? (
            <h1>Loading...</h1>
          ) : (
            currentRepos.map((repo) => {
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
                    View on Github
                  </a>
                  <Link className="details-link" to={`/repoinfo/${repo.name}`}>
                    Repository details
                  </Link>
                </div>
              );
            })
          )}
        
        </section>
        <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Repositories;
