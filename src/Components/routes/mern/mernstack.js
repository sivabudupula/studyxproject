import React from 'react'
import { Link } from 'react-router-dom';

export default function mernstack() {
  return (
    <div>
        <h1 className='mean-h'>Mernstack Courses</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PtgpSwEYx1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
        <p className='mean1'>All MERN Stack Courses</p>
        <p className='p-mean'>Learning how to design both the front and back end of web applications opens up twice as many job opportunities for developers. If you already know JavaScript, learning the MERN Stack is easy. The MERN stack is a popular web development stack that consists of four main technologies: MongoDB, Express.js, React, and Node.js. Each component plays a crucial role in building dynamic and modern web applications. Here are five important things about the MERN stack.</p>
        </div>
     
     <div>
        <p className='mean1'>Learn more about MERN Stack</p>
        <p className='p-mean'>MEAN is a full-stack JavaScript framework that allows developers to rapidly prototype and release MERN-based web applications. In a deadline-driven world, the MERN stack has become popular for its efficiency and comprehensive suite of modern web development tools.</p>
         <p className='mean1'>About Mern Stack Web Developer Training Course:</p>
        <p className='p-mean'>The Mern Stack Certification training will provide expertise and skills in developing various applications from the basic to advanced level through realtime examples</p>
        <p className='p-mean'>MERN stack differs from MERN stack, another end-to-end JavaScript web development solution, in that it uses Angular for front-end development instead of React.
           The MERN stack is considered a full-stack solution because it provides developers with tools to build a complete web application, from the front-end user interface to the server-side, back-end logic. One of the benefits of the MERN stack is that it uses a single programming language (JavaScript) throughout the entire stack, which makes it easy to learn and use. The combination of these four technologies provides a robust foundation for developers to create applications with maximum efficiency and minimal time expenditure.</p>

     </div>

            <div>
            <Link to='/mernstackquiz'> <button className='butds1'>Start Quiz</button></Link>
            <Link to=''><button className='butds1'>Assignments</button></Link>
            </div>
        
    </div>
  )
}
