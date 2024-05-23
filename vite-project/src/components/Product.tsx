import React from 'react'
import Products from './Products'
interface Props{
    products: Products[],
    a: number
}
interface Products{
    name: string,
    id: number,
    price: number,
}
const obj={
    name: "nam son",
    age: 18,
    address:"hn"
}
export default function Product(props: Props) {
    // dùng destructoring
    const {products} = props

  return (
    <div>
        <ul>
            {products.map((item, index,arr)=>{
                return <li key={index}> tên sản phẩm: {item.name} giá: {item.price}</li>
            })}
        </ul>
        <Products></Products>
    </div>
  )
}