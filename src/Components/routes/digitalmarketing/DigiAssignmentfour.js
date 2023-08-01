import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DigiTimeContext } from '../digitalmarketing/DigiTimeContext';


const DigiAssignmentsfour = () => {
  const { timeLeft } = useContext(DigiTimeContext);
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
      <br></br>
      <br></br>
    <div className='assignmentsubheading'>
          Assignments
        </div>
       
    <div className='time-container'>
            <div className='timeLeft'>Time Left:</div>
            <div className='time'>{formatTime(timeLeft)}</div>
          </div>
      <div className='assignmentone'>
         <br></br>
        Question 4: Which of the following is the correct depiction of Digital Marketing?
          <br></br>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;E-mail Marketing</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Social Media Marketing</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Web Marketing</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;'User Experience:'</label>
          <br></br>
          <br></br>
          <div className='assignment'>
            <Link to='/digitalassignment5'><button className='assignmentsubmit'>Submit</button></Link>
            {/* <Link to='/nextassignment2'><button className='assignmentsubmit'>Next</button></Link> 
               <Switch>
        <Route path='/nextassignment2' component={Assignmenttwo} />
      
        {/* Add more routes for additional questions if needed }
      </Switch>*/}
            </div>
         
            </div>
            <div>
       
      </div>

      
     </div>
     <div className='assignmentnextheading'> <br></br>

<br></br>
<br></br>
<br></br>

  <div className='insidecontent'>
 ________________ More people use mobile devices to access the internet 
  than ever before. Mobile traffic has surpassed desktop traffic, making it essential 
  for businesses to cater to mobile users.

  </div>
</div>
    </div>
    )
}

export default DigiAssignmentsfour