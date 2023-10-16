import React from "react";

export default function Intro(){
    
    const [scrollTop, setScrollTop] = React.useState(0);
    
    React.useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
  const handleClick = () => {
      
      //const scrollDist = window.innerHeight;
      scrollTop<300 ? window.scrollTo({ top: window.innerHeight, behavior: "smooth" }) : window.scrollTo({ top: -scrollTop, behavior: "smooth" });
  };
    
    return(
        <div>
        
        <div className="introdiv">
        
        <div className="intro">
        <h1>monkey</h1>
        <h3>developer</h3>
        </div>
        
        {scrollTop<300 ? <h2 className="downfirst" onClick={handleClick}>^</h2> : <h2 className="up" onClick={handleClick}>^</h2>}
        
        </div>
        
        </div>
    )
}