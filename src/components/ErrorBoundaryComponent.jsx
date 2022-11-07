import React from 'react'
import '../assets/styles/errorboundary.css'

function ErrorBoundaryComponent({country}) {

    if(country === 'Nigeria'){
      throw new Error('AN ERROR OCCURED')
    }

   return(                  
      <div>
          <h1>
              Error Boundary
          </h1>
      </div>
  )
}

export default ErrorBoundaryComponent