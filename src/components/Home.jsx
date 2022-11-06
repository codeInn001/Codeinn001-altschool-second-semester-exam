import React from 'react'
import '../assets/styles/home.css'

function Home({user}) {

    console.log(user);
  return (
    <section className='home'>
        <img src={user.avatar_url} alt="" />
        <p className="bio">{user.bio}</p>
        <a href={user.url} target="_blank" rel="noopener noreferrer">Github</a>
    </section>
  )
}

export default Home