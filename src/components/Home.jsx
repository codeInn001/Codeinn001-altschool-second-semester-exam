import React from "react";
import "../assets/styles/home.css";
import { Helmet } from "react-helmet";



function Home({ user }) {
  console.log(user);
  return (
    <section className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="view home page" />
      </Helmet>
      <img src={user.avatar_url} alt="" />
      <p className="bio">{user.bio}</p>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </section>
  );
}

export default Home;
