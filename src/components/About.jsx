import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/errorboundary.css";

function About() {
  return (
    <div className="about-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="/" />
        <meta
          name='description'
          content='Fall back page for error 404'
        />
      </Helmet>
      <h1>page does not exist </h1>
      <h3>404 ☹️</h3>
      <a href="/">Go back home</a>
    </div>
  );
}

export default About;
