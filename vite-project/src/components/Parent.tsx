import React from 'react'
import Child from './Child'
interface Props{
  a: string,
}
export default function Parent(props: Props) {
  return (
    <div>Parent
      <Child></Child>
    </div>
  )
}