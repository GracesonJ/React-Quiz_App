import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

function QuizResult(props) {
  return (
<>
    <div className='show-score'>
    <span> Your Score:<br/><br/>
         {props.score} / {props.totalScore}</span>
    </div>
    <Link to={'/'} className="btn" id='exit-btn'>Exit</Link>
      <button className='btn-primary' id="try-again-btn" onClick={props.tryAgain}>Try Again</button>
      
</> 
 )
}

export default QuizResult