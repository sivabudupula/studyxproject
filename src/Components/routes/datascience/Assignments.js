import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Assignmenttwo from './Assignmenttwo';
import { TimerContext } from './TimeContext';

const Assignments = ({ onTimeExpired }) => {
  const { timeLeft } = useContext(TimerContext);
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
    
         <div className='assignmentone'>
         <br></br>
         Question 1: Exploratory Data Analysis (EDA)
         Dataset: Titanic Survival Dataset
         <br></br>
 Load the Titanic dataset and perform basic data exploration. Provide summary statistics and handle missing values.
<br></br>
<br></br>
          Fill the blank space in the code with the appropriate function
          given in the options so that the respective function will be applied
          <br></br>
          <br></br>
          </div>
          <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;pd.read_csv('titanic_dataset.csv')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;pd.read('titanic_dataset.csv')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;pd.write('titanic_dataset.csv')</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;pd.write_csv('titanic_dataset.csv')</label>
          <br></br>
          <br></br>
          </div>
      <div className='assignment'>
        <Link to='/assignmenttwo'>
          <button className='assignmentsubmit'>Submit</button>
        </Link>
      </div>
     
    </div>
    <div className='assignmentnextheading'>
      <div className='insidecontent'>
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

export default Assignments;