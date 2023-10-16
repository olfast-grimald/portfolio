import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './Comps/Background';
import Intro from './Comps/Intro';
import Skills from './Comps/Skills';
import Exp from './Comps/Exp';
import Projects from './Comps/Projects';
import Why from './Comps/Why';
import Contact from './Comps/Contact';
import Navigation from './Navigation';


function App() {

const handleClickHome = () => {
      //console.log(scrollTop)
      const scrollDist = window.scrollY;
      window.scrollTo({ top: -scrollDist, behavior: "smooth" })
  };

const handleClickSkill = () => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  };
  
  const handleClickExp = () => {
      window.scrollTo({ top: window.innerHeight*2, behavior: "smooth" })
  };
  
  const handleClickProj = () => {
      const scrollDist = window.innerHeight*3 + 170;
      window.scrollTo({ top: scrollDist, behavior: "smooth" })
  };
  
  const handleClickWhy = () => {
      const scrollDist = window.innerHeight*6;
      window.scrollTo({ top: scrollDist, behavior: "smooth" })
  };

  const handleClickContact = () => {
      window.scrollTo({ top: window.innerHeight*8, behavior: "smooth" })
  };

  return (
    <div>
    
    <div className="navi">
        <h3 onClick={handleClickHome}>home</h3>
        <h3 onClick={handleClickSkill}>skills</h3>
        <h3 onClick={handleClickExp}>experience</h3>
        <h3 onClick={handleClickProj}>projects</h3>
        <h3 onClick={handleClickWhy}>why you should hire me</h3>
        <h3 onClick={handleClickContact}>contact</h3>
    </div>
    
    <Background />
    <Intro />
   
    <Skills />
    <Exp />
    <Projects />
    <Why />
    <Contact />
    
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
