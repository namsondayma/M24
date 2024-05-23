import React from 'react'
import Classcomponent from './components/ClassComponents';
import Form from './components/From';
import Bai1 from './components/Baitap/Bai1'
import Bai2 from './components/Baitap/Bai2'
import Bai3 from './components/Baitap/Bai3'
import Bai4 from './components/Baitap/Bai4'
import Bai6 from './components/Baitap/Bai6'
import Bai8 from './components/Baitap/Bai8'
export default function App() {
  setTimeout(() => {
    console.log("setTimeout");
  },100000)
  let interval = setInterval(() => {
    console.log("setInterval");
  },100000)
  const handleClick = () => {
    clearInterval(interval)
  }
  return (
    <div>App
      <button onClick={handleClick}>Stop</button>
      <Classcomponent></Classcomponent>
      <Form></Form>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai6></Bai6>
      <Bai8></Bai8>
    </div>
  )
}
