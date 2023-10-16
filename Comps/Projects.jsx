import React from "react";

export default function Projects(){
    const handleClick = () => {
      //console.log(scrollTop)
      const scrollDist = window.innerHeight*6;
      window.scrollTo({ top: scrollDist, behavior: "smooth" })
  };
    
    return(
        <div className="page" id="proj">
        <h1>projects</h1>
        
        <div className="pagediv">
        
        <h3 className="pagehead">Tenzies</h3>
        <p className="pagepara projtype"><em>Browser Game</em></p>
        <p className="pagepara projdesc">A game with ten dice where the player has to hold down dice with matching faces and keep rolling dice till all dice have the same face.<br />Made using React, HTML and CSS.</p>
        
        <h3 className="pagehead">Meme Generator</h3>
        <p className="pagepara projtype"><em>Web Application</em></p>
        <p className="pagepara projdesc">A web application that pulls in memes from the Imgflip API and allows users to add their own top and bottom texts to create original memes<br />Made using React, HTML, CSS and Imgflip API.</p>
        
        <h3 className="pagehead">Monkey Travels</h3>
        <p className="pagepara projtype"><em>Blog Page</em></p>
        <p className="pagepara projdesc">A responsive travel journal website featuring animation and parallax scrolling effect<br />Made using ReactJS, CSS and HTML.</p>
        
        <h3 className="pagehead">AirBnb Clone</h3>
        <p className="pagepara projtype"><em>Web Application</em></p>
        <p className="pagepara projdesc">A clone of Airbnb's Online Experiences website featuring conditional labels to let users know of ticket/seat availability.<br />Made using ReactJS, CSS and HTML.</p>
        
        <h3 className="pagehead">Floor is Pastel</h3>
        <p className="pagepara projtype"><em>Unity Game</em></p>
        <p className="pagepara projdesc">A hypercasual game where the player has to bounce a ball over tiles to reach the last tile<br />Made using Unity 3D, C#.</p>
        
        <h3 className="pagehead">DX Ball</h3>
        <p className="pagepara projtype"><em>Unity Game</em></p>
        <p className="pagepara projdesc">A clone of the classic brick breaking game, DX Ball, where the player has to control the movement of a ball with a paddle<br />Made using Unity 3D, C#.</p>
        
        <h3 className="pagehead">Alien Invasion</h3>
        <p className="pagepara projtype"><em>Unity Game</em></p>
        <p className="pagepara projdesc">A clone of the classic asteroid game, DX Ball, where the player has to control the horizontal movement of a spacecraft whilst shooting at incoming aliens.<br />Made using Unity 3D, C#.</p>
        
        <h3 className="pagehead">DASALT</h3>
        <p className="pagepara projtype"><em>Android Application</em></p>
        <p className="pagepara projdesc">Led a team of four to develop an Android application which enables individuals within an organisation to track the live location of users, as well as chat with other users.<br />Made using Java,  Android SDK, Google Map API, NoSQL, Firebase by Google Cloud Platform and performance optimised using Android Profiler.</p>
        
        
        </div>
        
        <h2 className="down" onClick={handleClick}>^</h2>
        
        </div>
    )
}