import React from 'react'

const QuizResult = (props) => {
  return (
    <div className='show-score'>
     Your Score:{props.score}<br/>
     Total Score :{props.totalscore}

    </div>
  )
}

export default QuizResult