import React from 'react'

function QuizResult(props) {
  return (
<>
    <div className='show-score'>
    <span> Your Score:<br/><br/>
         {props.score} / {props.totalScore}</span>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    
</> 
 )
}

export default QuizResult