import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/errorboundary.css'
function Fallback() {
  return (
    <div>
        <div className='error-boundary-container'>
          <h1>Something went wrong </h1>
          <p>☹️</p>
          <a href='/'>Go back home</a>
        </div>
    </div>
  )
}

export default Fallback