import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const PernstackAssignmentone = () => {

  return (
    <div className='assignment-container'>
    <div className='assignmentheading'>
    
    <div className='assignmentone'>
    
     
         <br></br>
         Question 1: Why Node.js? 
          <br></br>
          <br></br>
          <div className='optionsheading'>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Highly Scalable.</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;Highly extensible.</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;'Provides advantage of caching'</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;'Provides vast number of libraries.'</label>
          <br></br>
          <br></br>
          <div className='pernstcakassignment'>
            <Link to='/pernstackassignmenttwo'><button className='pernstackassignmentsubmit'>Submit</button></Link>
            {/* <Link to='/nextassignment2'><button className='assignmentsubmit'>Next</button></Link> 
               <Switch>
        <Route path='/nextassignment2' component={Assignmenttwo} />
      
        {/* Add more routes for additional questions if needed }
      </Switch>*/}
            </div>
         </div>
            </div>
            <div>
       
      </div>
     
    </div>
    <div className='assignmentnextheading'>
      <div className='insidecontent'>
      ___________________ and __________________ advertising are two essential 
      digital marketing strategies for improving online visibility. 

    </div>
    </div>
    </div>
    )
}

export default PernstackAssignmentone