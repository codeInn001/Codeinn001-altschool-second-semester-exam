import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/repoinfo.css";
import { Helmet } from "react-helmet";
import {Link, useParams} from 'react-router-dom'





function RepositoryInfo() {
  const [repo, setRepo] = useState([]);
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);

  const {name} = useParams();


  useEffect(() => {
    fetch("https://api.github.com/repos/codeinn001/" + name)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
        setRepoLoading(true);
      })
      .catch((err) => {
        setRepoError(err);
        setRepoLoading(false);
      });
  }, []);



  
  return (
    <section className="repo-info-container">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Repository</title>
          <link rel="canonical" href="/" />
          <meta
            name="description"
            content="Shows details of codeinn001 individual repository"
          />
        </Helmet>
        <Link to='/repos' className="back">Back to Repositories</Link>
        <div className="repo-card">
          <div className="github-logo">
          <img src="https://img.icons8.com/color/48/null/github--v1.png"/>
          </div>
          <h3>{repo.name}</h3>
          <div className="summary">
            <p>{repo.description  ? repo.description : 'Description not available'}</p>

            <div className="repo-stats">
              <div className="repo-stat">
                <p className="stat-number">{repo.stargazers_count}</p>
                <span className="stat-name">Stars</span>
              </div> 
              <div className="repo-stat">
                <p className="stat-number">{repo.watchers}</p>
                <span className="stat-name">Watchers</span>
              </div>
              <div className="repo-stat">
                <p className="stat-number">{repo.forks}</p>
                <span className="stat-name">forks</span>
              </div> 
            </div>    
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default RepositoryInfo;
