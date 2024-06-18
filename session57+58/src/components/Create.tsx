import axios from 'axios'
import React, { useEffect } from 'react'

export default function Create() {
    useEffect(()=>{
        let newUser={
            name:"Nam Sơn",
            email:"kinngusihuhu@gmail.com",
        }
        axios.post("http://localhost:8080/user",newUser)
    },[])
  return (
    <div>
      
    </div>
  )
}
