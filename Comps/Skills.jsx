import React from "react";

export default function Skills(){
    
  const handleClick = () => {
      //console.log(scrollTop)
      //const scrollDist = window.innerHeight*2;
      window.scrollTo({ top: window.innerHeight*2, behavior: "smooth" })
  };
    
    
    return(
        
        <div className="page">
        <h1>skills</h1>
        
        <div className="pagediv">
        
        <h3 className="pagehead">Programming</h3>
        <p className="pagepara">Java, JavaScript, C/C++</p>
        
        <h3 className="pagehead">Frontend</h3>
        <p className="pagepara">React JS, CSS, HTML, Vue JS</p>
        
        <h3 className="pagehead">Backend</h3>
        <p className="pagepara">SQL, NoSQL, REST APIs</p>
        
        <h3 className="pagehead">Others</h3>
        <p className="pagepara">Unity 3D, Android Studio, PowerShell</p>
        
        </div>
        
        <h2 className="down" onClick={handleClick}>^</h2>
        
        </div>
        
    )
}

/*
<div className="page skills">
        <h1>skills</h1>
        
        <div className="skillscorner">^</div>
        </div> */