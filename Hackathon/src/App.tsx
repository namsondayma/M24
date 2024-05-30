import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import app from './components/styles/app.scss'


export default function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ProductCard></ProductCard>
      <ProductList></ProductList>
      <Sidebar></Sidebar>
    </div>
  )
}
