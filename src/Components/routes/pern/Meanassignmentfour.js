import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Meanassignmentfour = () => {

  return (
    <div className='assignmentheading'>
    
      <div className='taskheading'>
      Instructions
      </div>
         <div>
         <br></br>
         Why Node.js? 
          <br></br>
          <br></br>
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
            <Link to='/meanassignmentfive'><button className='meanassignmentsubmit'>Submit</button></Link>
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

export default Meanassignmentfour