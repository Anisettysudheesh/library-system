import React, { useState,useEffect } from 'react';

import axios from "axios"
function FA() {

  const [users,setUsers] = useState([])

  const getData = async()=>{
   try{
    const response = await axios.get ("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
    
    
     console.log(response.data)
   }
   catch(error){
    console.log("error",error)
  }
  }
 

 
  useEffect(()=>{
    getData()
  },[])



  return ( 
     <div>
       <table>
       
        <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
       
        {
          users.map((items)=>(
            <tr key={items.id}>
            <td>{items.name}</td>
            <td>{items.username}</td>
            <td>{items.email}</td>
            </tr>

          ))
        }
       </tbody>
      </table> 

  </div>);
}

export default FA;