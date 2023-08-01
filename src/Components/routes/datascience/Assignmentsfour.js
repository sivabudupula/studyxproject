import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TimerContext } from './TimeContext';

const Assignmentfour = () => {
  const { timeLeft } = useContext(TimerContext);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  return (
    <div className='assignment-container'>
    <div className='assignmentheading'>
      <div className='assignmentsubheading'>
        Assignments
      </div>
      <div className='taskheading'>
      Instructions
      </div >
      <div className='time-container'>
            <div className='timeLeft'>Time Left:</div>
            <div className='time'>{formatTime(timeLeft)}</div>
          </div>
         <div className='assignmentone'>
         <br></br>
         Question 4: Data Preprocessing - Feature Scaling
Dataset: Housing Price Dataset

a) Load the Housing Price dataset and perform feature scaling on the numerical features.
          <br></br>
          <br></br>
          <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;fit_transform(housing_df[numerical_features])</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;.fit_transform(housing_af[numerical_features])</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;fit_transform([numerical_features])</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;fit_transform(housing_df[])</label>
          <br></br>
          <br></br>
</div>
          <div className='assignment'>
            <Link to='/Assignmentfive'><button className='assignmentsubmit'>Submit</button></Link>
            {/* <Link to='/nextassignment2'><button className='assignmentsubmit'>Next</button></Link> */}
            </div>
            </div>
           

            
    </div>
    <div className='assignmentnextheading'> <br></br>

<br></br>
<br></br>
<br></br>

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
  
    )
}

export default Assignmentfour