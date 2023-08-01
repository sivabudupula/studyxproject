import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginimage from '../Images/loginimage.jpg'
import profile from '../Images/profile.jpg'
function Login() { 
 const navigate=useNavigate(); 
 
const [data ,setData]=useState({
  email: '' ,
  password: '',

})
const [submitting, setSubmitting] = useState(false);
const [error, setError] = useState('');
const {email,password}=data;

const changeHandler = e =>{
  setData({...data,[e.target.name]:e.target.value,})
}
const submitHandler = e =>{
  e.preventDefault();
  createLogin();
  navigate('/dashboard')
}

const createLogin = async () => {
  setSubmitting(true);
  try {
    const response = await axios.post('http://localhost:3001/login', data);
    console.log(response);
    alert('Your Login is Successful');
    setError('');
  }
   catch (error) {
    console.error(error);
    alert('Error submitting login');
    setError('Internal Server Error');
  } finally {
    setSubmitting(false);
  }
};

  return (
  <div className='main-login'>
<div className='dimage'>
<img src={loginimage}  className='limage' width={700} height={500} alt='loginimage'/>
</div>

    <div className='login template d-flex justify-content-center align-item center vh-100 '>
      <div className='form-container p-5 rounded '>
        <form onSubmit={submitHandler} autoComplete='off'>
        <img src={profile} className='l1' width={100} height={100} alt=''/>
            <h5 className='text-center'>Log in</h5>
<div className='mb-2'>
<label htmlFor='email' className='input-login'>Email</label>
<input  type='email'
name='email'
value={email}
className='form-control fc'
placeholder='Enter email' 
required
onChange={changeHandler}/>
</div>
<div className='mb-2'>
<label htmlFor='password' className='password-Input'>password</label>
<input  type='password'
name='password'  
value={password}
className='form-control fc '
placeholder='Enter password'
required
onChange={changeHandler} />
</div>
<div className='mb-2'>

<input  type='checkbox'
className='custom-control custom-checkbox'
id='check'
 />
 <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
</div>
<div className='d-grid lb' style={{backgroundColor:'7E57C2'}}>
 <button className='btn'style={{color:'white'}}  >Log in</button>
</div>
<p className='text-right'>
Forgot <Link to="/forgotpassword" >password?</Link><Link to='/signup' className='ms-2'>Sign up</Link>
</p>
        </form>
</div>


    </div>
    </div>
  )
}

export default Login