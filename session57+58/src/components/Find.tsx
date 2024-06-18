import axios from 'axios'
import React, { useEffect } from 'react'

export default function Find() {
    useEffect(()=>{
        let value:string ="c"
        axios.get(`http://localhost:8080/user?name_like${value}`)
        .then (response=>{
            console.log("Giá trị trả về tìm kiếm",response);
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}
