import React from 'react'
import { Link } from 'react-router-dom';


export default function ArtificialIntelligence() {
  return (
    <div>
        <h1 className='dev-h'>DevOps</h1>
        <div>
        <iframe className="dev-v"width="560" height="315" src="https://www.youtube.com/embed/Xrgk023l4lI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p className='p-mean'>This DevOps training course is designed keeping in mind the latest trends in the industry. The course focuses on creating a strong base for various DevOps tools including Git, Jenkins, Docker, Ansible, Kubernetes, Prometheus and Grafana, and Terraform. The training is completely hands-on oriented and designed in a way that will help you in becoming a certified practitioner by providing you an intensified training for the best practices about Continuous Development, Continuous Testing, Configuration Management, including Continuous Integration and Continuous Deployment and finally Continuous Monitoring of the software throughout its development life cycle.</p>
        <p className='p-mean'>Upon completion of the DevOps training course, you will be able to:
Understand the DevOps Process and Lifecycle
Manage and keep a track of different versions of the source code using GIT
Use Jenkins and maven to build the application and integrate the CI/CD Pipeline
Manage your infrastructure using Ansible
Build and Deploy containers using Docker
Orchestrate your containerized environment with Kubernetes
Monitor and visualize your environment using Prometheus and Grafana
Provision new infrastructure using Terraform
</p>

<p className='p-mean'>This DevOps training course is specifically designed for:
Individuals looking to establish their credibility and value in the market as experienced DevOps Practitioners
<ul className='mean2'>
  <li>System Administrators</li> 
  <li>Solutions Architects</li>
  <li>Infrastructure Architects</li>
  <li>Site Reliability Engineers</li>
  <li>Technical Leads</li> 
  <li>Software Engineers</li>
  <li>Freshers</li>
</ul>
</p>

<div className='assignment'>
            <Link to='/artificialquiz'><button className='butds1'>Start Quiz</button></Link>
            <Link to='/artificialassigments'><button className='butds1'>Assignments</button></Link>
            </div>

</div>
  )
}
