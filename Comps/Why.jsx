import React from "react";

export default function Why(){
    const handleClick = () => {
      //console.log(scrollTop)
      //const scrollDist = window.innerHeight*2;
      window.scrollTo({ top: window.innerHeight*8, behavior: "smooth" })
  };
    
    
    return(
        
        <div className="page">
        <h1>why you should hire me</h1>
        
        <div className="pagediv">
        
        <h3 className="pagehead">Funny</h3>
        <p className="pagepara">I'm funny.</p>
        
        <h3 className="pagehead">Passionate</h3>
        <p className="pagepara">Very passionate.</p>
        
        <h3 className="pagehead">Eager Learner</h3>
        <p className="pagepara">Love to do things I don't know how to do. Again and again, till I know how to do them perfectly.</p>
        
        <h3 className="pagehead">Dedicated</h3>
        <p className="pagepara">I'm a bulldozer when it comes to solving problems, I will keep going at it till it is solved.</p>
        
        <h3 className="pagehead critics">Critics & Audience Reviews</h3>
        <p className="pagepara stars">&#11088;&#11088;&#11088;</p>
        <p className="pagepara rev">I don't know what she's doing.</p>
        <p className="pagepara who">- Mother, Home</p>
        <p className="pagepara stars">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
        <p className="pagepara rev">Good job</p>
        <p className="pagepara who">- Project Manager, TCS</p>
        <p className="pagepara stars">&#11088;</p>
        <p className="pagepara rev">&#128514;&#128514;&#128514;</p>
        <p className="pagepara who">- Best Friend, Jungle</p>
        
        </div>
        
        <h2 className="down" onClick={handleClick}>^</h2>
        
        </div>
    )
}