import React from 'react'
import DynamicCalendar from './DynamicCalendar'
import Sidebar from './sidebar'

function calender() {
  return (
    <div> 
      <div>
        <Sidebar/>
      </div>
        <DynamicCalendar/>
    </div>
  )
}

export default calender