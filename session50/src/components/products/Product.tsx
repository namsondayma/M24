import React from 'react'
import "./products.css"
import { useNavigate } from 'react-router-dom'
export default function Products() {
    const navigate = useNavigate();
    const handleClickDetail = (id:number) => { 
        navigate(/productDetail/${id})
    }
    let products=[
        {
            id:1,
            name: "mèn mén",
            price: 5000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3ow0Btz22zLMeBoCKOwrZF6Ce7MebEY52w&s"
        },
        {
            id:2,
            name: "mèn mén",
            price: 6000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskTveFEgv10CzbWoF-OLmnlG5Z5AruOgoKQ&s"
        },
        {
            id:1,
            name: "mèn mén",
            price: 7000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG35LDc9b9VAR0r_G9A-eYh_1N-Ri8P-83RQ&s"
        },
    ]
  return (
    <div className='container'>Products
        {products.map((item)=>{
            return(
                <div>
                    <p>tên {item.name}</p>
                    <p><img src={item.img} alt="" /> </p>
                    <p>Giá {item.price}</p>
                    <button>Mua</button>
                    <button onClick={()=>handleClickDetail(item.id)}>Chi tiết sản phẩm</button>
                </div>
            )
        })}

    </div>
  )
}
