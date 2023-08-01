import React, { useState, useContext } from 'react';
import Display2 from './display2';
import Questions2 from './questions2.json'
import { DigiQuizTimeContext } from './DigiQuizTimeContext';

export default function App4() {
  const { timeLeft } = useContext(DigiQuizTimeContext);
  //const [timeLeft, setTimeLeft] = useState(60); // 600 seconds (10 minutes)
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

    let tempMarks = []
  const [marks,setMarks] = useState([]);
  const changeHandler = (value,index) =>{
    tempMarks=marks;
    tempMarks[index] = value;
     setMarks ([...tempMarks]);
  }
  return (
    <div>
        <center>
        <div className='time-container'>
            <div className='timeLeft'>Time Left:</div>
            <div className='time'>{formatTime(timeLeft)}</div>
          </div>

        {Questions2.map((question,index)=>{
          return(
            <Display2 question={question} index={index} changeHandler={changeHandler}/> 
           
          )
        })}
          <button className='but1' onClick={()=> alert('your score is : ' +marks.reduce((a,b) => a+b,0)+'/5')}>End Quiz</button> 
      </center>

    </div>
  )
}
