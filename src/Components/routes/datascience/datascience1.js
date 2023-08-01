import React from 'react'
import Courses1 from './courses1'
import '../styles/pernstack1.css'
import { Link } from 'react-router-dom'

const Datascience1 = () => {
  return (
    <div>
        <Courses1/>
        <div class="row row-cols-1 row-cols-md-3 g-4 p1">
  <div class="col ">
    <div class="card pr1 " style={{ backgroundColor: '#FFE8E8 '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 1</h5>
        <p class="card-text">Python Data science introduction</p>
   <Link to='/datascience'><input type='text' value='Read More'/></Link>  
      </div>
      
    </div>
  </div>
  <div class="col ">
    <div class="card pr1" style={{ backgroundColor: '#EBFFEB '}}>
      
      
      <div class="card-body">
        <h5 class="card-title">Chapter 2</h5>
        <p class="card-text">Hands on with Pandas</p>
        <Link to='/datascience'><input type='text' value='Read More'/></Link> 
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card pr1"style={{ backgroundColor: '#FFEDFB '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 3</h5>
        <p class="card-text">Working with pandas Data</p>
        <Link to='/datascience'><input type='text' value='Read More'/></Link> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#C6CFFF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 4</h5>
        <p class="card-text">Numpy-Mathematical computation</p>
        <Link to='/datascience'><input type='text' value='Read More'/></Link> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1 "style={{ backgroundColor: '#F3FFAA '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 5</h5>
        <p class="card-text">Hands on with Matplotlib library</p>
        <Link to='/datascience'><input type='text' value='Read More'/></Link> 
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#AFF1FF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 6</h5>
        <p class="card-text">Advanced Data Visualization using SEABORN</p>
        <Link to='/datascience'><input type='text' value='Read More'/></Link> 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Datascience1