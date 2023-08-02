import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const MachineAssignmentOne = () => {

  return (
    <div className='assignmentheading'>
    
      <div className='taskheading'>
      Instructions
      </div>
         <div>
         <br></br>

Question: What is the difference between UI and UX design?
          <br></br>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;UI (User Interface) design</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;accessibility,</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;'efficiency'</label>
          <br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">&nbsp;'while achieving their goals.'</label>
          <br></br>
          <br></br>
          <div className='uiassignment'>
            <Link to='/uiassignmenttwo'><button className='assignmentsubmit'>Submit</button></Link>
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
    )
}

export default UIAssignmentOne