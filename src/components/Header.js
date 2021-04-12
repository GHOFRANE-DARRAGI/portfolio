import React from "react";
import Typed from "react-typed";
const Header =()=>{
  return (

    <div className="header-wraper ">
        <div className="main-info overlay">
                <h1>take a look around</h1>
                <Typed
                
                 className="typed-text"
                 strings={["i'm","web developper","web designer","content creator"]}
                 typeSpeed={70}
                 backSpeed={70}
                 loop 
                
                />
                <a href="#" className="btn-main-offer">contact me</a>
        </div>

    </div>



  )



}


export default Header;