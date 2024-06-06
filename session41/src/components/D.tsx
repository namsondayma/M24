import React from 'react'
import E from './E'
interface D{
    name:string;
}
export default function D(props:D) {
    console.log("",props);
  return (
    <div>
      <E name={props.name}></E>
    </div>
  )
}
