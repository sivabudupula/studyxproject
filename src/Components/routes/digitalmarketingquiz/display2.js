import React from 'react'


export default function Display2({question,index,changeHandler}) {
    const handler = e=>{
        let temp = question.answer === e.target.value ? 1 : 0;
        changeHandler(temp,index);
    }
  return (
    <div className='align-left'>
       <h3>{question.title}</h3>
       <div onChange={handler}>
        <input type='radio' value="A" name={index}/> {question.options[0]} &nbsp;
        <input type='radio' value="B" name={index}/> {question.options[1]} &nbsp;
        <input type='radio' value="C" name={index}/> {question.options[2]} &nbsp;
        <input type='radio' value="D" name={index}/> {question.options[3]} &nbsp;
       </div>
    </div>
  )
}
