
//REGISTRATION FORM
import React, { useState } from 'react';
import "../App.css"

function Register() {

  const[name,setName]= useState("")
  const[age,setAge]= useState("")
  const[college,setCollege]= useState("")
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")

  const Submit = (e)=>{
    e.preventDefault();

    const details = {
      name: name,
      age:age,
      college:college,
      email:email,
      password:password
    }
    console.log(details)

  }



  return ( 
    <div>
      <div>
      <header>
      <div className="nav-left">
          <li>GIST Shopping Mall</li>
      </div>
          <div className=" nav-right">
             <li>Home</li>
              <li>Catalog</li>
              <li>Cart</li>
             <li>login</li>
              <li> Register</li>
         
      </div>
  </header><br></br>
      </div>
      <form onSubmit={Submit} >
        <label><h1 style={{marginLeft:"20px"}}>REGISTRATION FORM</h1></label>
        <label>Enter your name:</label>
        <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <label>Enter your age:</label>
        <input type="number" name="age" onChange={(e)=>{setAge(e.target.value)}}></input><br></br>
        <label>Enter your college:</label>
        <input type="text" name="college" onChange={(e)=>{setCollege(e.target.value)}}></input><br></br>
        <label>Enter your email:</label>
        <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
        <label>Enter your password: </label>
        <input  type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br><br></br>
        <label><button type="submit">Submit</button></label>
      </form>
    </div>
   );
}

export default Register;
