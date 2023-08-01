import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const AssignmentOne = () => {

  return (
    <div className='assignment-container'>
    <div className='assignmentheading'>
    
         <div className='assignmentone'>
         <br></br>
         Question 1: Compare and contrast Search Engine Optimization (SEO) and Pay-Per-Click (PPC) advertising.
         
         <br></br>
         Which approach would you recommend for a new e-commerce website and why?
<br></br>
<br></br>
          Fill the blank space in the code with the appropriate function
          given in the options so that the respective function will be applied
          <br></br>
          <br></br>
          </div>
          <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;SEO and PPC advertising</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Email Marketing</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Customer Retention</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Data Driven Decision</label>
          <br></br>
          <br></br>
          </div>
      <div className='assignment'>
        <Link to='/digitalassignment2'>
          <button className='assignmentsubmit'>Submit</button>
        </Link>
      </div>
     
    </div>
    <div className='assignmentnextheading'>
      <div className='insidecontent'>
      ___________________ and __________________ advertising are two essential 
      digital marketing strategies for improving online visibility. 

    </div>
    </div>
    </div>

  );
};

export default AssignmentOne