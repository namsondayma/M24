import React, { useState } from 'react'

export default function Bai3a() {
    const [value, setValue] = useState<string>("")
    const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Ngày được chọn: {value} </h3>
                <input type="date" placeholder='Nhập dữ liệu' onChange={handlChange} />
            </div>
        </div>
    )
}