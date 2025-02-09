import React from 'react';
import "../App.css"
import {Link} from "react-router-dom"
 
function Navbar() {
    return (
        
             <div>
      <header>
      <div className="nav-left">
          <li>GIST Shopping Mall</li>
      </div>
          <div className=" nav-right">
            
         
            <Link to="/Home"> <li>Home</li> </Link>
            <Link to="Login"> <li>Login</li></Link>
            <Link to="Contact"> <li>Contact</li></Link>
            <Link to="About"> <li>About</li></Link>
           
           
         
      </div>
  </header>
      </div>

  
    );
}

export default Navbar;