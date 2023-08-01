import React from 'react'
import { Link } from 'react-router-dom';

export default function meanstack() {
  return (
    <div>
        <h1 className='mean-h'>Meanstack Courses</h1>
        <iframe className="mean-v" width="560" height="315" src="https://www.youtube.com/embed/uONz0lEWft0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
        <p className='mean1'>All MEAN Stack Courses</p>
        <p className='p-mean'>Learning how to design both the front and back end of web applications opens up twice as many job opportunities for developers. If you already know JavaScript, learning the MEAN Stack is easy. Udemy offers top-rated courses on every aspect of MEAN usage, from Angular, to Node.js, to Express, and MongoDB.</p>
        </div>
     
     <div>
        <p className='mean1'>Learn more about MEAN Stack</p>
        <p className='p-mean'>MEAN is a full-stack JavaScript framework that allows developers to rapidly prototype and release MEAN-based web applications. In a deadline-driven world, the MEAN stack has become popular for its efficiency and comprehensive suite of modern web development tools.</p>
         <p className='mean1'>About Mean Stack Web Developer Training Course:</p>
        <p className='p-mean'>The Mean Stack Certification training will provide expertise and skills in developing various applications from the basic to advanced level through realtime examples</p>
        <p className='p-mean'>MEAN stack differs from MERN stack, another end-to-end JavaScript web development solution, in that it uses Angular for front-end development instead of React.
           The MEAN stack is considered a full-stack solution because it provides developers with tools to build a complete web application, from the front-end user interface to the server-side, back-end logic. One of the benefits of the MEAN stack is that it uses a single programming language (JavaScript) throughout the entire stack, which makes it easy to learn and use. The combination of these four technologies provides a robust foundation for developers to create applications with maximum efficiency and minimal time expenditure.</p>

     </div>

            <div>
            <Link to='/meanstackquiz'> <button className='butds1'>Start Quiz</button></Link>
            <Link to='/meanstackassignments'><button className='butds1'>Assignments</button></Link>
            </div>
        
    </div>
  )
}
