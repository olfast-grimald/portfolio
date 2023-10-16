import React from "react";

export default function Contact(){
    
    const handleClick = () => {
      //console.log(scrollTop)
      const scrollDist = window.scrollY;
      window.scrollTo({ top: -scrollDist, behavior: "smooth" })
  };
    
    return(
        <div className="page contactpg">
        <h1>contact</h1>
        
        <div className="pagediv contact">
        <a target="_blank" href="https://github.com/olfast-grimald">
        <img className="logo" src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" />
        </a>
        <a target="_blank" href="mailto: swatihuded20@gmail.com">
        <img className="logo" src="https://cdn0.iconfinder.com/data/icons/squared-communication/64/mail-circle-512.png" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/swati-huded/">
        <img className="logo" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" />
        </a>
        </div>
        <h2 className="uplast" onClick={handleClick}>^</h2>
        </div>
    )
}