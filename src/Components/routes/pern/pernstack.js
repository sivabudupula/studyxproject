import React from 'react'
import { Link } from 'react-router-dom';

const Pernstack = () => {
  return (
    <div>
        <h1 className='pern-h'>
        PERN Stack Course - Build a Yelp clone (Postgres, Express, React, Node.js)
        </h1>
        <div>
        <iframe className='pern-v' width="560" height="315" src="https://www.youtube.com/embed/J01rYl9T3BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2 className='pern'>Overview</h2>
        <p className='p-pern'>Learn the PERN stack by building a Yelp clone. The PERN stack includes PostgreSQL, Express, React, and Node. You will learn all the basics including installation, creating databases/tables, making queries, adding entries, establishing relationship between tables, SQL joins, and more.</p>
        <p className='p-pern'>This stack consists of PostgreSQL, Express, React and Node.js. Combining these technologies, one can build a full-stack web application with CRUD operations. Everyone must have heard about MERN Stack which is basically a JavaScript Stack for the deployment of full-stack web development and contains 4 technologies, namely: MongoDB, Express, React and Node.js. but PostgreSQL seems to be gaining more popularity because it offers wide support for NoSQL feature, transactional and standard compliant. It is written in C language.</p>
        </div>

        <div>
            <h2 className='pern'>Knowing about PERN Stack Components:</h2>
            <ol>
                <li className='pern'>PostgreSQL (Object-Relational Database)</li>
                <p className='p-pern'>PostgreSQL is a powerful, open source object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. PostgreSQL is ACID-compliant, transactional, that stores the data in the tabular format and uses constraints, triggers, roles, stored procedures and views as the core components. </p>
                <li className='pern'>Express (Back-End Framework)</li>
                 <p className='p-pern'>It is a web application framework for Node.js. Being a free and open software, it is used for building web applications and specially APIs. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you already know.</p>
                <li className='pern'>React (Front-End Library)</li>
                <p className='p-pern'>React is basically a JavaScript library for building user interfaces. It is easy, efficient and painless way to create Interactive UIs. It is maintained by Facebook and a community of individual developers and companies. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes and for this reason only, it is used for developing single-page application or mobile applications.</p>
                <li className='pern'>Node.js (JavaScript runtime environment)</li>
                <p className='p-pern'>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine for developing server-side and networking applications. Being an asynchronous event-driven JavaScript runtime, it is used to build fast and scalable network applications. Node.js is free and open source server environment that runs on many platforms. </p>
            </ol>
        </div>
            
            <div >
            <Link to='/app1'><button className='butds1datascience'>Start Quiz</button></Link>
            <Link to='/pernstackassignments'><button className='butds1'>Assignments</button></Link>
            </div>
            
        
    </div>
  )
}

export default Pernstack