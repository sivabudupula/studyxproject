import React, { useState } from 'react'
import { Quizdata } from './questions'
import '../meanstackquiz/quiz.css'
import QuizResult from '../meanstackquiz/result'
import Timer from '../meanstackquiz/timer'
const Artificialquiz = () => {
    const[currentQuestion, setCurrentQuestion]=useState(0);
    const[score ,setScore]=useState(0);
    const[clickedoption ,setClickedoption]=useState(0);
    const[showResult, SetshowResult]=useState(false);

    
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<Quizdata.length-1){
        setCurrentQuestion(currentQuestion+1);
        setClickedoption(0);
        }
        else{
        SetshowResult(true);
        }
        
    }
    const updateScore=()=>{
        if(clickedoption===Quizdata[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        SetshowResult(false);
        setCurrentQuestion(0);
        setClickedoption(0);
        setScore(0);
    }
  return (
    <div className='qbody'>
        
        <p className='heading-text'>Time Left <Timer/></p>
        
        <div className='container'>
            {showResult?(
                <QuizResult score={score} totalscore={Quizdata.length} tryAgain={resetAll}/>
            ):(
            <>
         <div className='question'>
            <span id='question-number'>{currentQuestion+1}.</span>
            <span id='question-text'>{Quizdata[currentQuestion].question}</span>
            </div>   
<div className='option-container'>
{Quizdata[currentQuestion].options.map((option,i)=>{
    return(
        <button 
        className={`option-btn ${
        clickedoption == i+1?"checked":null
    }`}
        
        key={i}
        onClick={()=>setClickedoption(i+1)}>{option}</button>
    )
})}
</div>
<input type='button'value='Next' id='next-button' onClick={changeQuestion}/>
</>)}
        </div>

    </div>
  )
}

export default Artificialquiz