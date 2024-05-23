import React, { useState } from 'react'

export default function Bai2a() {
    const [value, setValue] = useState<string>("")
    const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Dữ liệu người dùng nhập: {value} </h3>
                <input type="text" placeholder='Nhập dữ liệu' onChange={handlChange} />
            </div>
        </div>
    )
}