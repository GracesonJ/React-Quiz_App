import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="container d-flex align-items-center">
            <div className="heading-txt">
                <h4 >Welcome to React Quiz App</h4>
            </div>
            <div>
              <p>This is a React Quiz App Contains 10 Multiple choice Questions. Quizzes are a great way to have fun, but they can also be used as a tool for self-improvement. They can help you learn more about yourself and how others view you. . . ! </p>
            </div>
            <Link to={'/quiz'} className="btn" id='start-btn'> Get Started</Link>
        </div>
    </>
  )
}
export default Home