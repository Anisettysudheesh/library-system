
//REGISTRATION FORM
import React, { useState } from 'react';
import "../App.css"

function Login() {


  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")

  const Submit = (e)=>{
    e.preventDefault();

    const details = {
      email:email,
      password:password
    }
    console.log(details)

  }



  return ( 
    <div>
     
      <form onSubmit={Submit} >
        <label><h1 style={{marginLeft:"20px"}}>Login FORM</h1></label>
        <label>Enter your Email</label>
        <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
        <label>Enter your password: </label>
        <input  type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br><br></br>
        <label><button type="submit">Submit</button></label>
      </form>
    </div>
   );
}

export default Login;
