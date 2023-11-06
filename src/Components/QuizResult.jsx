import React from 'react'

function QuizResult(props) {
  return (
<>
    <div className='show-score'>
        Your Score:<br/><br/>
        <span> {props.score} / {props.totalScore}</span>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    
</> 
 )
}

export default QuizResult