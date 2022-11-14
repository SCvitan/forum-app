import React, {useState, useEffect} from 'react'
import "./Users.css";

import Card from './Card';





const Users = () => {

  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
    (async () => {
      let userData
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        userData = (await response.json())
      } catch (error) {
        console.log(error)
        userData = []
        
      }
    
      setUsers(userData)
      
    })()
  }, [])

  

  return (
    <div className='cards-container'>
      {users.map((user, index) => (
        <Card key={index} userData={user} />
        ))}
    
    </div>
  )

};

export default Users;