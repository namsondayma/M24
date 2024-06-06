import React from 'react'
import B from './B'
interface A{
    name:string;
}

export default function A(props:A) {
  console.log("",props);
  return (
    <div>
      <B name={props.name}></B>
    </div>
  )
}
