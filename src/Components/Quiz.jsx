import React, { useState } from 'react'
import { QuizQuestions } from '../Questions/QuizQuestion'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizQuestions.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizQuestions[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container d-flex align-items-center ">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizQuestions.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question ">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizQuestions[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizQuestions [currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button"  onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz