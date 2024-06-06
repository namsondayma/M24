import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Routes>
        {/*Định nghĩa các Router cho component*/}
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}