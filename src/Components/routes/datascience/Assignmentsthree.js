import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TimerContext } from './TimeContext';

const Assignmentthree = () => {
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
        Assignments 3
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
         Question 3: Data Preprocessing - Feature Scaling
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
            <Link to='/Assignmentfour'><button className='assignmentsubmit'>Submit</button></Link>
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
from sklearn.preprocessing import MinMaxScaler
<br></br>
# Load the Housing Price dataset
<br></br>
housing_df = pd.read_csv('housing_dataset.csv')
<br></br>
# Separate numerical features
<br></br>
numerical_features = housing_df.select_dtypes(include=['float64', 'int64']).columns
<br></br>
# Feature scaling using Min-Max Scaler
<br></br>
scaler = MinMaxScaler()
housing_df[numerical_features] = scaler.___________________________
<br></br>
# Display the scaled dataset
<br></br>
print(housing_df.head())


  </div>
</div>

</div>
  
    )
}

export default Assignmentthree