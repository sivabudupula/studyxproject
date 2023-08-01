import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/signup.css'
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
 import simage from '../Images/simage.jpg';


function Signup() {
  const navigate=useNavigate(); 
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword:'',
  
  });
   const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const[perror,setPerror]=useState('')
  const[cperror,setCperror]=useState('')
   
  const submitHandler = e =>{
    e.preventDefault();
    createSignup();
    navigate('/login')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
        [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formdata.password.length<8){
      setPerror('password must be atleast 8 character')
    }
    else if(formdata.password!==formdata.confirmpassword){
      setCperror('passwords are not matching')
    }
    else{
    createSignup();
  
    }
  }
  const createSignup = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/signup', );
      console.log(response);
      alert('Your signup is Successful');
      setError('');
    }
     catch (error) {
      console.error(error);
      alert('Error submitting signup');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
     
  return (
    <div className='main-s'>
    <div className='sd'>
     <img src={simage}  className='simage' width={500} height={500} alt='simage'/> 
    </div>
    
    <div className='signup template d-flex justify-content-center align-item center 
     vh-100 '>
      <div className='form-container1 p-5 rounded '>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <h5 className='text-center'>Sign up</h5>
            <div className='mb-2'>
<label htmlFor='fname' className='first-name'>First Name <span className='errmsg'>*</span></label>
<input  type='text'
value={formdata.firstname}
className='form-control'
placeholder= 'Enter First Name' 
name='firstname'
required
onChange={handleChange}/>
</div>
<div className='mb-2'>
<label htmlFor='lname' className='second-name'>Last Name <span className='errmsg'>*</span></label>
<input  type='text'
name='lastname'
value={formdata.lastname}
className='form-control'
placeholder='Enter Last Name' 
required
onChange={handleChange}/>
</div>

<div className='mb-2'>
<label htmlFor='email' className='e-mail-sign-up'>Email<span className='errmsg'>*</span></label>
<input  type='email'
name='email'
value={formdata.email}
className='form-control'
placeholder='Enter email'
required 
onChange={handleChange}/>
</div>
<div className='mb-2'>
<label htmlFor='password' className='sign-up-password'>password<span className='errmsg'>*</span></label>
<input  type='password'
name='password'
value={formdata.password}
className='form-control'
placeholder='Create password'
required 
onChange={handleChange}/><span style={{color:"red"}} >{perror}</span>
</div>
<div className='mb-2'>
<label htmlFor='password'className='sign-up-confirm-password'>Confirm password <span className='errmsg'>*</span></label>
<input  type='password'
name='confirmpassword'
value={formdata.confirmpassword}
className='form-control'
placeholder='Confirm password'
required 
onChange={handleChange}/><span style={{color:"red"}}>{cperror}</span>
</div>

<div className='d-grid mt-3 lb'>
<button className='btn '  style={{color:'white'}}>Sign up    <Link to='/' className='ms-2'></Link></button>
</div>
<p className='text-right'>
Already Registered <Link to='/login' className='ms-2'>Log in</Link>
</p>
        </form>
</div>

    </div>
    <ToastContainer/> 
    </div>
  )
}

export default Signup