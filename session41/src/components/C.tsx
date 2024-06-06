import React from 'react'
import D from './D'
interface C{
    name:string;
}
export default function C(props:C) {
    console.log("",props);
  return (
    <div>
      <D name={props.name}></D>
    </div>
  )
}
