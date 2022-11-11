import { useEffect, useState } from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Repositories from "./components/Repositories";
import RepositoryInfo from "./components/RepositoryInfo";
import About from "./components/About";
import Fallback from "./components/Fallback";
import ErrorBoundaryComponent from "./components/ErrorBoundaryComponent";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [repos, setRepos] = useState(null);
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);

  // fetch my data from github api and store it in state
  useEffect(() => {
    fetch("https://api.github.com/users/codeinn001")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // fetch github repos and store in repos state
  useEffect(() => {
    fetch("https://api.github.com/users/codeinn001/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setRepoLoading(true);
      })
      .catch((err) => {
        setRepoError(err);
        setRepoLoading(false);
      });
  }, []);

  function handleErrorBoundaryError(error, info) {
    console.log("loading", error, info);
  }

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={Fallback}
        onError={handleErrorBoundaryError}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home user={loading ? data : "loading"} />}
          />
          <Route
            path="/repos"
            element={<Repositories repos={repoLoading ? repos : "loading"} />}
          />
          <Route
            path="/repoInfo/:name"
            element={<RepositoryInfo repoId="504944287" />}
          />
          <Route path="*" element={<About />} />
          <Route
            path="/error boundary"
            element={<ErrorBoundaryComponent country="Nigeria" />}
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
