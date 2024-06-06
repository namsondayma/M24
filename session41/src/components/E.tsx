import React, { useContext } from 'react'
import { Context } from './UseContext';
interface E{
    name:string;
}
    export default function E(props:E) {
let result = useContext(Context);
console.log("",result);
  return (
    <div>
      
    </div>
  )
}
