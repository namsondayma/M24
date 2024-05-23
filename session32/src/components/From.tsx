import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const handleClick = () => {
        console.log("đã gọi vào hàm");
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("giá trị người dùng nhập vào");
        // cập nhật State
        setName(e.target.value)
    }
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            {/* 
            Các kĩ thuật xử lí trong form
            Có 2 kĩ thuật xử lí chính        
            1.controller
            + lấy dữ liệu người dùng nhập vào ô input
            + lấy dữ liệu khi người dùng nhập vào ô textarea
            + chọn select-option
            2.uncontroller*/}
            <p>{name}</p>
            <label htmlFor="">tên</label>
            <input
                onChange={handleChange}
                type="text" />
            <p>{email}</p>
            <label htmlFor="">email</label>
            <input
                onChange={handleChange2}
                type="text"/>
            <button onClick={handleClick}>login</button></div>
    )
}