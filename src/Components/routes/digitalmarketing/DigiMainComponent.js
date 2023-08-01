import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { DigiTimeContext } from './DigiTimeContext';
import AssignmentOne from './Assignmentone';

const DigiMainComponent = () => {
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const { timeLeft } = useContext(DigiTimeContext);
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
        Digital Marketing Assignments 
      </div>
      <div className='taskheading'>
        Instructions
      </div>
      <div className='time-container'>
        <div className='timeLeft'>Time Left:</div>
        <div className='time'>{formatTime(timeLeft)}</div>
      </div>
      <AssignmentOne />
     
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

export default DigiMainComponent;
