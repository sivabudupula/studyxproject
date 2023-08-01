import React from 'react'
import { useState,useEffect } from 'react'
const Timer = () => {
    const[seconds,setSeconds]=useState(60);
    const[minutes,setMinutes]=useState(0);
    var timer
    const stop=()=>{
        clearInterval(timer)
    }
    useEffect(()=>{
         timer=setInterval(()=>{
        setSeconds(seconds-1);
        if(seconds===0){
            stop();
            setMinutes(0);
            setSeconds(0);
            
        }
        },1000);
        return () => clearInterval(timer);
    });

  return (
    <div className='timer'>
       <div >
        <div className='timer-container'>
          <h3>{minutes<10? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h3>
        </div>
        </div> 

    </div>
  )
}

export default Timer