import React from 'react'

import { FaRegUser} from "react-icons/fa";
import { TfiLayoutListPost} from "react-icons/tfi";
import { CiTwitter} from "react-icons/ci";
import { PiShareFatLight} from "react-icons/pi";
import Sidebar from './sidebar';
import '../styles/dashboard.css'


const Dashboard = () => {
  const data = {
    labels:['one','two','three'],
    datasets:[
        {
            data: [3,6,9],
            backgroundColor: ['aqua', 'orangered', 'purple']
        }
    ]
};
// const options={

// }


  return (
    <div className='main-dashboard'>
       <Sidebar/> 
       
        <div className='row r4'>
          
        <div className='  col-md-2 '>
          <div className='box1' style={{backgroundColor:'green'}}>
          <FaRegUser size="50px"/><br/>
          <span className='span-u'>Users</span><br/>
          <span className='h-num'>50</span>
          </div>
          </div>
          <div className=' col-md-2'>
          <div className='box1' style={{ backgroundColor: 'palevioletred'}}>
          <TfiLayoutListPost size="50px"/><br/>
          <span className='span-u'>Posts</span><br/>
          <span className='h-num'>50</span>
          </div>
          </div>
          <div className=' col-md-2'>

          <div className='box1' style={{backgroundColor:'lightblue'}}>
          <CiTwitter size="50px"/><br/>
          <span className='span-u'>Tweets</span><br/>
          <span className='h-num'>125</span>
          </div>
          </div>
<div className=' col-md-2'>
          <div className='box1' style={{ backgroundColor: 'rgb(189, 189, 17)'}}>
          <PiShareFatLight size="50px"/><br/>
          <span className='span-u'>Shares</span><br/>
          <span className='h-num'>36</span>
          </div>
          </div>
          
          </div>
          
          <p className='p-rec'>Check More Records of Employees</p>
        <div className='t-c '>
        <div className='col-md-6'>
        
            <table border={1}>
                <tr className='tr1'>
                    <td>S.No</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
                <tr className='tr2'>
                    <td>1</td>
                    <td>Rohit</td>
                    <td>Kumar</td>
                    <td>Rohit@gmail.com</td>
                    <td>9697977969</td>
                </tr>
                <tr className='tr2'>
                    <td>2</td>
                    <td>Mahesh</td>
                    <td>T</td>
                    <td>Mahesh@gmail.com</td>
                    <td>9876979763</td>
                </tr>
                <tr className='tr2'>
                    <td>3</td>
                    <td>Vijay</td>
                    <td>Verma</td>
                    <td>Rohit@gmail.com</td>
                    <td>8885847837</td>
                </tr>
                <tr className='tr2'>
                    <td>4</td>
                    <td>Sanjay</td>
                    <td>Sharma</td>
                    <td>Sanjay@gmail.com</td>
                    <td>7947947745</td>
                </tr>
                <tr className='tr2'>
                    <td>5</td>
                    <td>Virat</td>
                    <td>Singh</td>
                    <td>Virat@gmail.com</td>
                    <td>9778778695</td>
                </tr>
                <tr className='tr2'>
                    <td>6</td>
                    <td>Arjun</td>
                    <td>Reddy</td>
                    <td>Arjun@gmail.com</td>
                    <td>6878684859</td>
                </tr>
            </table>
        </div>
        
      </div>
      </div>
    
    
  )
}

export default Dashboard