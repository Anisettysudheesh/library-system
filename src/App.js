// import React, { Component } from 'react';
// import Navbar from "./models/nav.js";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Login from "./models/login.js";
// import Contact from "./models/contact.js"
// import About from "./models/About.js"

// function App() {


//   return ( <div>
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path="/Login" element={<Login/>}></Route>
//       <Route path="/Contact" element={<Contact/>}></Route>
//       <Route path="/About" element={<About/>}></Route>
//     </Routes>
    
//     </BrowserRouter>


//   </div> );
// }

// export default App;
// src/App.js
import React from 'react';
import MapComponent from './models/MapComponent.js';
import FA from "./models/Fetchapi.js";
import Register from "./models/Register.js"
import Weather from "./models/wheather.js"
import ImageReact from './models/Imagetoreactcode.js';
import Library from './models/library.js';
import SplashCursor from './models/splashcursor.js';


function App() {
  return (
    <div className="App">
      {/* <SplashCursor/> */}
      
      {/* <Register/>
      <Weather/> */}
      {/* {<ImageReact/>} */}
      <Library/>
    
   
    </div>
  );
}

export default App;
