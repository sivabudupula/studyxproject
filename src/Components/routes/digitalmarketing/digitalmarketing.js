import React from 'react'
import { Link } from 'react-router-dom';

export default function digitalmarketing() {
  return (
    <div>
        <div >
        <h1 className='d-head'>Digital Marketing</h1>
        <iframe className='digi' width="560" height="315" src="https://www.youtube.com/embed/ZVuHLPl69mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
         <div>
          <p className='p-mean'>In recent years, digital marketing has exploded onto the marketing scene, and its effects have been anything but small. Traditional marketers and old-school companies have struggled to keep up with the ever-changing world of internet marketing while customers, leads, and clients have become more adept in this new landscape. But companies can’t afford to ignore changes in the way people look to buy, and that is why they have stepped into the modern way of marketing. </p>
          <p className='p-mean'>In simple words, digital marketing is any form of marketing that occurs online with the help of mobile, laptop, internet, etc. In addition to digital signage and technology that may not be connected to the internet. It can range from anything as complex as automated email marketing initiatives all the way down to the content choices on your website’s blog.</p>
        </div>

        <div>
            <p className='mean1'>Types of Digital Marketing:</p>
            <ul className='mean2'>
                <li> Search Engine Optimization (SEO)</li>
                <li> Paid Social and Paid Search Advertising</li>
                <li> Email Marketing</li>
                <li> Content Marketing</li>
                <li> Affiliate Marketing</li>
                <li> Mobile Marketing</li>
                <li> Social Media Marketing</li>
            </ul>
        </div>
    
            <div>
            <Link to='/digitalmarketingquiz'><button className='butdm1'>Start Quiz</button></Link>
            <Link to='/digitalassignments'><button className='butds1'>Assignments</button></Link>
            </div>
    </div>

    
  )
}
