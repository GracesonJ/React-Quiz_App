import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="container d-flex align-items-center">
            <div className="heading-txt">
                <h4 >Welcome to React Quiz App</h4>
            </div>
            <Link to={'/quiz'} className="btn" id='start-btn'> Get Started</Link>
        </div>
    </>
  )
}
export default Home