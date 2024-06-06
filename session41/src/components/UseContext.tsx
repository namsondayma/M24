import React, { createContext, useState, } from 'react'
import A from './A'
export const Context = createContext("");
export default function UseContext() {
    const [name, setName] = useState<string>("Nam Son");
    return (
        <div>
            UseContext
            {/**
       Sinh ra giúp cho việc truyền dữ liệu giữa các componentcos quan hệ cha con được nhanh hơn,
       dễ dàng hơn không phải truyền theo kiểu props bình thường.
       Các component phải có quan hệ cha con.
       Tạo 1 biến gắn = createContext("") export biến ra
       Dùng biến này bọc component
       <Biến.Provider value={}>
       Component con muốn nhận data
       Import biến đó vào
       UseContext(Biến bên trên export)
       */}
            <Context.Provider value={name}>
                <A></A>
            </Context.Provider>
        </div>
    )
}
