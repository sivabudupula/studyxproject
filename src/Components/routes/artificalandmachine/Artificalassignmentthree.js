import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArtificialTimerContext } from './ArtificialTimerContext';

const Artificalassignmentthree = ({ onTimeExpired }) => {
  const { timeLeft } = useContext(ArtificialTimerContext);
  //const [timeLeft, setTimeLeft] = useState(60); // 600 seconds (10 minutes)
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleCloseModal = () => {
    setIsTimerExpired(false);
    // Add any other logic to handle closing the modal if needed
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
         Question 3: What is artificial intelligence (AI)?
         <br></br>
          </div>
          <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;(' simulation of human intelligence in machines')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;('language processing')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;('computer vision')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;('robotics, and more.')</label>
          <br></br>
          <br></br>
          </div>
      <div className='assignment'>
        <Link to='/artificialassignmentfour'>
          <button className='assignmentsubmit'>Submit</button>
        </Link>
      </div>
     
    </div>
    <div className='assignmentnextheading'>
      <div className='insidecontent'>
      <br></br>
      <br></br>
      <br></br>
    import pandas as pd
    <br></br>
# Load the Titanic dataset
titanic_df = ____________('titanic_dataset.csv')
<br></br>
# Summary statistics
summary_stats = titanic_df.describe()
print(summary_stats)
<br></br>
# Handling missing values
titanic_df.fillna(titanic_df.mean(), inplace=True)
titanic_df['Embarked'].fillna(titanic_df['Embarked'].mode()[0], inplace=True)
print(titanic_df.isnull().sum()) 

    </div>
    </div>
    </div>

  );
};

export default Artificalassignmentthree;