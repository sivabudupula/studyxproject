import React from 'react'
import { Link } from 'react-router-dom';

export default function uiux() {
  return (
    <div>
        <h1 className='mean-h'>UI&UX Courses</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y40J_DomBu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
        <p className='mean1'>All UI&UX Courses</p>
        <p className='p-mean'>UI (User Interface) and UX (User Experience) are two critical aspects of software and web design that focus on creating user-friendly and visually appealing digital products. They play a crucial role in determining how users interact with and perceive a product or service.</p>
        </div>
     
     <div>
        <p className='mean1'>Learn more about UI; </p>
        <p className='p-mean'>UI refers to the visual elements of a digital product with which users interact. It includes everything that users see, touch, or interact with on the screen, such as buttons, icons, menus, forms, and other graphical elements. The main goal of UI design is to create an intuitive and visually appealing interface that enables users to complete tasks efficiently and effortlessly. Good UI design should take into account factors like layout, color schemes, typography, and visual hierarchy to guide users smoothly through the user flow.</p>
         <p className='mean1'>Learn more about UX:</p>
        
        <p className='p-mean'>UX, on the other hand, is concerned with the overall experience users have while interacting with a digital product. It encompasses all aspects of user interaction, including their emotions, perceptions, and feelings throughout the entire user journey. A positive UX design focuses on understanding user needs, behaviors, and motivations, aiming to provide meaningful, satisfying, and enjoyable experiences. UX designers conduct research, create personas, develop user flows, and perform usability testing to ensure that a product meets the users' needs and expectations effectively.</p>

     </div>

            <div>
            <Link to='/uiquiz'> <button className='butds1'>Start Quiz</button></Link>
            <Link to='/mernstackassignments'><button className='butds1'>Assignments</button></Link>
            </div>
        
    </div>
  )
}
