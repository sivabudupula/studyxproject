import React from 'react'
import { Link } from 'react-router-dom';

export default function datascience() {
  return (
    <div>
        <h1 className='data-h'>Data Science</h1>
        <div>
        <iframe className='data' width="560" height="315" src="https://www.youtube.com/embed/X3paOmcrTjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className='p-mean'>Data Science is a domain that deals with a high volume of data to find out unseen patterns, abnormalities, and insights and make a decision or predict future outcomes. Data Science is a vast domain, it involves Mathematics, Business acumen, Statistics, Machine Learning, Artificial Intelligence, and similar fields to deal with the data. In a Data Science course, students can expect to learn about various tools, software, and Machine Learning algorithms that help to analyze data.</p>
        <p className='p-mean'>Online data science courses have become popular recently as businesses and the education system are transitioning to online mode. An online data science course can help students/freshers to upskill when they do not have access to industry training or internships. </p>
        <p className='p-mean'>The shifting of businesses from traditional to online format has created a demand for data scientists or professionals who can handle such large data sets. Likewise, the salary and career prospects for individuals who want to pursue a career in data science in India have increased immensely.</p>
        <p className='p-mean'>Data Science can be defined as a mixture of implementing various scientific activities such as mathematics, calculus, graphs, charts, algorithms, computer programs, and a lot more. It is that part of science which also requires knowledge about business or commerce related fields. With the help of data science, professionals can extract very important pieces of information, insights, and other solutions that could have never been found from big raw data. Big companies all over the world require professionals with specialised knowledge in this field to provide valuable insights, decisions, or solutions from the big bulk data of their businesses.</p>
        </div>
      
            <div className='assignment'>
            <Link to='/datasciencequiz'><button className='butds1datascience'>Start Quiz</button></Link>
            <Link to='/datascienceassigments'><button className='butds1datascience'>Assignments</button></Link>
            </div>
    </div>
  )
}
