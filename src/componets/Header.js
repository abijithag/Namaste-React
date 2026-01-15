import {LOGO_URL} from "../util/constants"
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnNamsteReact,setBtnNamsteReact] =useState("login")

  
    return (
      <div className="heading-container">
        <div className="img-container">
           <img className="img"
           src={LOGO_URL}
           />
        </div>
        <div className="nav-bar">
         <ul>
         <li><Link to="/">home</Link></li>
         <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">about</Link></li>
          <li>cart</li>
        <button className="login-btn" 
        onClick={()=>{
          btnNamsteReact ==="login"?
          setBtnNamsteReact("logout")
          : setBtnNamsteReact("login")

        }}
        >
          {btnNamsteReact}
        </button>
  
  
  
         </ul>
        </div>
      </div>
    );
  };
  


  export default Header