 import React from 'react'
import Courses1 from './courses1'
import '../styles/pernstack1.css'
import {Link} from 'react-router-dom'


const Pernstack1 = () => {
  return (
    <div>
    <Courses1/>
        <div class="row row-cols-1 row-cols-md-3 g-4 p1">
  <div class="col "> 
    <div class="card pr1 " style={{ backgroundColor: '#FFE8E8 '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 1</h5>
        <p class="card-text">Postgresql</p>
    <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
      
    </div>
  </div>
  <div class="col ">
    <div class="card pr1" style={{ backgroundColor: '#EBFFEB '}}>
      
      
      <div class="card-body">
        <h5 class="card-title">Module 2</h5>
        <p class="card-text">Express</p>
        <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card pr1"style={{ backgroundColor: '#FFEDFB '}}>
      
      <div class="card-body">
        <h5 class="card-title">Madule 3</h5>
        <p class="card-text">React</p>
        <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#C6CFFF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Madule 4</h5>
        <p class="card-text">Node js</p>
        <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
   </div>
  </div>
  <div class="col">
    <div class="card pr1 "style={{ backgroundColor: '#F3FFAA '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 5</h5>
        <p class="card-text">Empty</p>
        <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div cl ass="col">
    <div class="card pr1"style={{ backgroundColor: '#AFF1FF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 6</h5>  
        <p class="card-text">Empty</p>
        <Link to ='/pernstack' ><input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div> 
</div>
    </div>
  )
}

export default Pernstack1;