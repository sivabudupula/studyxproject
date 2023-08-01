import React from 'react'
import Courses1 from './courses1'
import '../styles/pernstack1.css'
import { Link } from 'react-router-dom'
const ArtificialIntelligence1 = () => {
  return (
    <div>
 <Courses1/>
        <div class="row row-cols-1 row-cols-md-3 g-4 p1">
  <div class="col ">
    <div class="card pr1 " style={{ backgroundColor: '#FFE8E8 '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 1</h5>
        <p class="card-text">Introduction to Devops</p>
<Link to='/devops'><input type='text' value='Read More'/></Link>
      </div>
      
    </div>
  </div>
  <div class="col ">
    <div class="card pr1" style={{ backgroundColor: '#EBFFEB '}}>
      
      
      <div class="card-body">
        <h5 class="card-title">Chapter 2</h5>
        <p class="card-text">Cloud Computing</p>
        <input type='text' value='Read More'/>
      </div>
    </div>
  </div>
  <div class="col ">
    <div class="card pr1"style={{ backgroundColor: '#FFEDFB '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 3</h5>
        <p class="card-text">LINUX Basic and Admin</p>
        <input type='text' value='Read More'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#C6CFFF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 4</h5>
        <p class="card-text">Shell Scripting</p>
        <input type='text' value='Read More'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1 "style={{ backgroundColor: '#F3FFAA '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 5</h5>
        <p class="card-text">Version Control-GIT</p>
        <input type='text' value='Read More'/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card pr1"style={{ backgroundColor: '#AFF1FF '}}>
      
      <div class="card-body">
        <h5 class="card-title">Chapter 6</h5>
        <p class="card-text">Build tool-Maven</p>
        <input type='text' value='Read More'/>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ArtificialIntelligence1