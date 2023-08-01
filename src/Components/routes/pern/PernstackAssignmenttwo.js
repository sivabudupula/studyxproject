import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PernTimeContext } from './PernTimeContext';


const PernstackAssignmentstwo = () => {
  const { timeLeft } = useContext(PernTimeContext);
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
          Question 2: Machine Learning - Classification
          Dataset: Iris Flower Dataset

          a) Load the Iris dataset and split it into training and testing sets. Implement a Decision Tree classifier and evaluate its accuracy.
          Fill the blank space in the code with the appropriate function
          given in the options so that the respective function will be applied
          <br></br>
          <br></br>
        </div>
        <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">&nbsp;accuracy_score(x_test, y_pred)</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">&nbsp;accuracy_score(y_test, x_pred)</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">&nbsp;accuracy_score(y_test, y_pred)</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">&nbsp;accuracy_score(x_test, x_pred)</label>
          <br></br>
          <br></br>
        </div>

        <div className='assignment'>
          <Link to='/pernstackassignmentthree'><button className='assignmentsubmit'>Submit</button></Link>
          {/* <Link to='/nextassignment2'><button className='assignmentsubmit'>Next</button></Link> */}
        </div>

      </div>
      </div>
      <div className='assignmentnextheading'> <br></br>

      <br></br>
      <br></br>
      <br></br>

        <div className='insidecontent'>
        from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
<br></br>
# Load the Iris dataset
<br></br>
iris = load_iris()
X, y = iris.data, iris.target
<br></br>
# Split the data into training and testing sets
<br></br>
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
<br></br>
# Implement Decision Tree Classifier
<br></br>
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)
<br></br>
# Make predictions on the test set
<br></br>
y_pred = clf.predict(X_test)
<br></br>
# Evaluate accuracy
<br></br>
accuracy = ______________________________
print("Accuracy: .2f".format(accuracy))
<br></br>

        </div>
      </div>
 
  </div>
)
}


export default PernstackAssignmentstwo