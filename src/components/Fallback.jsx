import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/errorboundary.css";
import { Helmet } from "react-helmet";


function Fallback() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fallback</title>
        <link rel="canonical" href="/" />
        <meta
          name='description'
          content='Fall back page for error boundary'
        />
      </Helmet>
      <div className="error-boundary-container">
        <h1>Something went wrong </h1>
        <p>☹️</p>
        <a href="/">Go back home</a>
      </div>
    </div>
  );
}

export default Fallback;
