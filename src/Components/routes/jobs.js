import React from "react";
import '../styles/job.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
const Card = () => {
  const navigate = useNavigate();

  const navigateDetails = () => {
    navigate('/jobdetails');
    
  }

  const companies = [
    {
      id: 1,
      companyName: "Company Infotech",
      jobRole: "Software Engineer",
      ctc: "$100,000",
    },
    {
      id: 2,
      companyName: "Company IBM",
      jobRole: "Product Manager",
      ctc: "$120,000",
    },
    {
      id: 3,
      companyName: "Company Capgemini",
      jobRole: "Data Scientist",
      ctc: "$90,000",
    },
    {
      id: 4,
      companyName: "Company Deloit",
      jobRole: "UX Designer",
      ctc: "$80,000",
    },
    {
      id: 5,
      companyName: "Company Exponent",
      jobRole: "Marketing Specialist",
      ctc: "$70,000",
    },
    {
      id: 6,
      companyName: "Company Filipon",
      jobRole: "Frontend Developer",
      ctc: "$95,000",
    },
    {
      id: 7,
      companyName: "Company Google",
      jobRole: "Data Analyst",
      ctc: "$85,000",
    },
    {
      id: 8,
      companyName: "Company Hyundai",
      jobRole: "Sales Manager",
      ctc: "$110,000",
    },
    {
      id: 9,
      companyName: "Company Inspiron",
      jobRole: "HR Specialist",
      ctc: "$75,000",
    },
  ];

  const Companies = ({ company }) => {
    return (
      <div className="card" >
        
        <h3>{company.companyName}</h3>
        <p>Job Role: {company.jobRole}</p>
        <p>CTC: {company.ctc}</p>
        <p>Location:{}</p>
        <button className="view-button"  onClick={navigateDetails}>Click to View</button>
      </div>
    )
  }

  return (
    <div className="sidebar">
      <Sidebar/>
      <div className="cards-container">
        {companies.map((company) => (
          <Companies key={company.id} company={company} />
        ))}
      </div>
    </div>
  );

};

export default Card;
