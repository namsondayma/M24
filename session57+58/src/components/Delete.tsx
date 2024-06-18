import axios from 'axios'
import React, { useEffect } from 'react'

export default function Delete() {
    useEffect(()=>{
        axios.delete("http://localhost:8080/user/2")
    },[])
  return (
    <div>
      
    </div>
  )
}
