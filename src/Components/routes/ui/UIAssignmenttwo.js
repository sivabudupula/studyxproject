import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UITimeContext } from '../uiuxdesign/UITimeContext';

const UIAssignmenttwo = ({ onTimeExpired }) => {
  const { timeLeft } = useContext(UITimeContext);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  return (
    
    <div className='assignment-container'>
      <div className='assignmentheading'>
      <br></br>
      <br></br>
      
        <div className='assignmentsubheading'>
          Assignments
        </div>
       
        <div>
          <div className='time-container'>
            <div className='timeLeft'>Time Left:</div>
            <div className='time'>{formatTime(timeLeft)}</div>
          </div>
          <br></br>
          <div className='assignmentone'>
          How would you conduct user research to inform the design process?
            <br></br>
            <br></br>
          </div>
          <div className='optionsheading'>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">&nbsp; Define research objectives and questions.</label>
            <br></br>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">&nbsp; Identify the target audience and recruit participants.</label>
            <br></br>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">&nbsp; Conduct interviews, surveys, or observations to gather insights.</label>
            <br></br>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">&nbsp;Analyze the data and identify patterns and pain points.</label>
            <br></br>
            <br></br>
          </div>

          <div className='assignment'>
            <Link to='/uiassignmentthree'><button className='assignmentsubmit'>Submit</button></Link>
            {/* <Link to='/nextassignment2'><button className='assignmentsubmit'>Next</button></Link> */}
          </div>

        </div>
        </div>
        <div className='assignmentnextheading'> <br></br>

        <br></br>
        <br></br>
        <br></br>

          <div className='insidecontent'>

          </div>
        </div>
   
    </div>
  )
}

export default UIAssignmenttwo