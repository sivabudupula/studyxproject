import React from 'react'
import Sidebar from './sidebar'
import '../styles/courses1.css'
import {BsSearch} from "react-icons/bs";
import c1 from '../Images/Pern stack logo.jpg'
import c2 from '../Images/Mean Stack img.png'
import c3 from '../Images/data-science-logo.png'
import c4 from '../Images/Digital Marketing logo.png'
import c5 from '../Images/DevOps img.png'
import c6 from '../Images/Cyber Security img.jpg'
import { Link } from 'react-router-dom';

const CoursesAssignments = () => {
  return (
    <div className='main-courses4'>
      
    <Sidebar/>

    <div className='row'>
    <div className='searchbar col-md-12 col-sm-6'>
   <BsSearch size={30} color='white'className='sicon'/>
   <input type='search' className='sbox' placeholder='Search'/>
    </div>
    </div>
    <div className='clogo'>
 <div className='d1'>     
 <Link to='/pernstack1'><img src={c1} alt='c1' className='c'/> </Link>
<p>Pernstack Assignment</p>
</div>
<div className='d1'>     
<Link to='/meanstack1'><img src={c2} alt='c2' className='c'/> </Link>
<p>Meanstack Assignment</p>
</div>
<div className='d1'>     
<Link to='/datascience1'><img src={c3} alt='c2' className='c'/> </Link>
<p>Datascience Assignment</p>
</div>
<div className='d1'>     
<Link to='/digitalmarketing1'><img src={c4} alt='c2' className='c'/> </Link>
<p>Digitalmarketing</p>
</div>
<div className='d1'>     
<Link to='/artificalintelligence'><img src={c5} alt='c2' className='c'/> </Link>
<p>Artificalintelligence</p>
</div>
<div className='d1'>     
<Link to='/mern'><img src={c6} alt='c2' className='c'/> </Link>
<p>Machinelearning</p>
</div>



 
    </div>
    </div>
  )
}

export default CoursesAssignments