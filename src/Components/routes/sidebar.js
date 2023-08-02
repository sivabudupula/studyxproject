import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
import {AiOutlineDashboard} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {BsCalendar3} from "react-icons/bs";
import {MdMenuBook} from "react-icons/md"
import {MdAssignmentAdd} from "react-icons/md"
import {MdOutlineQuiz} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {BiLogOutCircle} from "react-icons/bi"
import {MdBusinessCenter} from "react-icons/md"
import logo from '../Images/logo.jpg'

const Sidebar = () => {
  return (
    <div>
        <div className='main-sidebar'>
            <div className='s'>
            <aside>
            <img src={logo}  className='logo' width={100} height={100} alt='logo'/><hr className='h'/>
               
               <Link to="/Dashboard" className='L'><span><AiOutlineDashboard/></span>Dashboard</Link><hr className='h'/>
               <Link to="/courses" className='L'><span><MdMenuBook/></span>Courses</Link><hr className='h'/>
               <Link to="/Cards" className='L'><span><MdMenuBook/></span>Buy Now</Link><hr className='h'/>
                <Link to="/calender" className='L'><span><BsCalendar3/></span>Calender</Link><hr className='h'/>

                
                <Link to="/jobs" className='L'><span><MdBusinessCenter/></span>jobs</Link><hr className='h'/>
                <Link to="/profileform" className='L'><span><CgProfile/></span>profile</Link><hr className='h'/>
                <Link to="/" className='L'><span><BiLogOutCircle/></span>Logout</Link><hr className='h'/>
                
            </aside>
            </div>
        </div>
    </div>
  )
}

export default Sidebar