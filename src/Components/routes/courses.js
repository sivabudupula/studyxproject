import React from 'react'
import c1 from '../Images/Pern stack logo.jpg'
import c2 from '../Images/Mean Stack img.png'
import c3 from '../Images/data-science-logo.png'
import c4 from '../Images/Digital Marketing logo.png'
import c5 from '../Images/Ai.jpg'
import c6 from '../Images/ui.jpg'
import c7 from '../Images/mern.jpg'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom';
import '../styles/courses.css'

const Courses = () => {
  return (
    <div className='main-courses'>
      
        <Sidebar/>
        
        <div className='main-courses1'>
        <div className='main-section1 row'>
          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/pernstack'  ><a href='#'><img src={c1} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>Pern Stack</p>
          </div>

          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/meanstack'  > <a href='#'><img src={c2} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>Mean Stack</p>
          </div>
            
          


          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/datascience'  >  <a href='#'><img src={c3} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>Data Science</p>
          </div>
        </div>
         
         <div>
        <div className='main-section2 row'>
          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/digitalmarketing' >  <a href='#'><img src={c4} alt='course1' className='pic'/></a> </Link>
            <p className='c-p'>Digital Marketing</p>
          </div>

          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/artificialIntelligence' > <a href='#'><img src={c5} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>Artificial Intelligence & Machine Learning</p>
          </div>

          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/mernstack'> <a href='#'><img src={c7} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>MERN Stack</p>
          </div>

          <div className='section1 col-sm-6 col-md-3'>
          <Link to='/uiux'> <a href='#'><img src={c6} alt='course1' className='pic'/></a></Link>
          <p className='c-p'>UI/UX</p>
          </div>
        </div>
        </div> 

        </div>
    </div>
  )
}

export default Courses