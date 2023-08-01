import React from 'react'
import logo from '../Images/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import img1 from '../Images/img1.jpg'


const Home = () => {
  return (
    <div>
    <div className='nav'>
   <img src={logo}  className='logo' width={100} height={100} alt='logo'/>
   <ul>
   <Link to='/login' className='login1' >Login </Link>
  <Link to='/signup' className='login1' >Signup </Link>
     
  
  </ul>
  </div>
  <div className='row r3'>
    <div className='col-sm-12 col-md-6'>
  <div className='body1'>
<h2>Why Matrical Technologies</h2>

<p className='para'> At Matrical Technologies, we endeavor to provide a formidable platform for professionals who will be our change agents – catalysts who are torchbearers of our fortitude to excel and redefine the limits of technology to make our clients successful. Our hiring team focuses on the recruitment of talented professionals in the industry. If you are experienced in the pursuit of excellence in IT, and looking for challenging opportunities to actualize your fire within, look no further. A career at Wipro offers just that and a lot more.</p>
</div>
</div>
<div className='col-sm-12 col-md-6'>
  <div>
  <img src={img1} className='img1'alt='img1'></img>
  </div>
  </div>
  </div>
  
  
  
  <div className='body2'>
    <h2>Life at Matrical</h2>
    <p className='para1'>Our culture is a foundation of our success and it is completely people oriented, touching lives and making a difference to employees, stakeholders, customers and partners alike. We believe that excellence is not a destination but a journey on continuous improvement and we keenly promote an open culture, encouraging feedback, and actively transforming it in to action.</p>
    
  </div>
  </div>
  )
}

export default Home