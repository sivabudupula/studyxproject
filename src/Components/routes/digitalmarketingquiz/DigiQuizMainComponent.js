import React, { useState, useContext } from 'react';

import Modal from 'react-modal';

import { DigiQuizTimeContext } from './DigiQuizTimeContext';

import App4 from './App4';

const DigiQuizMainComponent = () => {
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const { timeLeft } = useContext(DigiQuizTimeContext);
  const handleTimeExpired = () => {
    setIsTimerExpired(true);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  return (
    <div>
      <div className='mainheading'>
        Assignments 
      </div>
      <div className='taskheading'>
        Instructions
      </div>
      <div className='time-container'>
        <div className='timeLeft'>Time Left:</div>
        <div className='time'>{formatTime(timeLeft)}</div>
      </div>
      <App4 />
     
        <Modal
          isOpen={isTimerExpired}
          onRequestClose={() => setIsTimerExpired(false)}
          contentLabel="Timer Expired Modal"
        >
          <h2>Time's Up!</h2>
          <p>Your time for this assignment has expired.</p>
          <button onClick={() => setIsTimerExpired(false)}>Close</button>
        </Modal>
    
    </div>
  );
};

export default DigiQuizMainComponent;
