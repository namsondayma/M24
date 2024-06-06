import React from 'react'
import C from './C'
interface B{
    name:string;
}
export default function B(props:B) {
    console.log("",props);
  return (
    <div>
      <C name={props.name}></C>
    </div>
  )
}
