import React from 'react'
import Courses1 from './courses1'
import '../styles/pernstack1.css'
import {Link} from 'react-router-dom'

const Meanstack1 = () => {
  return (
    <div>
<Courses1/>
        <div class="row row-cols-1 row-cols-md-3 g-4 p1">
  <div class="col ">
    <div class="card pr1 " style={{ backgroundColor: '#ffc9cc '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 1</h5>
        <p class="card-text">MongoDB</p>
    <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
      
    </div>
  </div>
  <div class="col ">
    <div class="card pr1" style={{ backgroundColor: '#ffffdb '}}>
      
      
      <div class="card-body">
        <h5 class="card-title">Module 2</h5>
        <p class="card-text">Express</p>
        <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card pr1"style={{ backgroundColor: '#F1D5BD '}}>
      
      <div class="card-body">
        <h5 class="card-title">Madule 3</h5>
        <p class="card-text">Angular</p>
        <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#BCC0C9 '}}>
      
      <div class="card-body">
        <h5 class="card-title">Madule 4</h5>
        <p class="card-text">Node js</p>
        <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1 "style={{ backgroundColor: '#DFD8AB '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 5</h5>
        <p class="card-text">Empty</p>
        <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#AFF1FF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Module 6</h5>
        <p class="card-text">Empty</p>
        <Link to='/meanstack'> <input type='text' value='Read More'/></Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Meanstack1