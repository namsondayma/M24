import React from 'react'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Product from './components/products/Product'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home></Home>}>
          <Route path='/home/header' element={<Header></Header>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/products' element={<Product></Product>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
