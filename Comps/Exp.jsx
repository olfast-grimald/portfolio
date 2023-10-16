import React from "react";

export default function Exp(){
    
    const handleClick = () => {
      //console.log(scrollTop)
      const scrollDist = window.innerHeight*3 + 170;
      window.scrollTo({ top: scrollDist, behavior: "smooth" })
  };
    
    return(
        <div className="page">
        <h1>experience</h1>
        
        <div className="pagediv">
        
        <h3 className="pagehead">Tata Consultancy Services</h3>
        <p className="pagepara expyrs">2020 - 2023</p>
        <p className="pagepara exppara">Worked with an experienced team to develop a <b>React web application</b> with reusable components to monitor user experience and remediate common user issues for a Canada-based fintech company – the application increased the efficiency of issue resolution by 77%.</p>
        <p className="pagepara exppara">Created <b>REST APIs</b> to retrieve device and usage data from Aternity and formulated useful indicators to measure user experience, resource consumption and device health.</p>
        <p className="pagepara exppara">Generated and analysed data of 50,000+ users in an enterprise, in order to create multiple personas to classify all users into with an expert team. Worked on <b>SQL mapping</b> of data (lauded with <b>Xcelerate award</b> for it!)</p>
        <p className="pagepara exppara">Effectively managed <b>stakeholder interactions</b> to ensure there were no gaps in requirements, expectations and the end products.</p>
        <p className="pagepara exppara">Developed PowerShell scripts to automate manual resolution steps for common issues, and identified triggers to enable proactive, automatic remediation. Collaborated with multiple teams worldwide to conduct rigorous testing and created comprehensive knowledge and maintenance documentation for the end product.</p>
        
        </div>
        
        <h2 className="down" onClick={handleClick} >^</h2>
        </div>
        
    )
}