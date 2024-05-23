import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count, setCount] = useState<number>(0);
    let index = 0;
    const refCurrent = useRef<HTMLInputElement>();//ref={current:1}
    refCurrent.current?.focus();
    useEffect(()=>{  refCurrent.current?.focus();},[]);
    // let a = {
    //     number: 1
    // }
    /**
    useRef la 1 ham nhan vao tham so la gia tri khoi tao truyen vao.
    useRef() tra ve 1 doi tuong la 1 obj,ben trong obj nay se co 1 
    key(current) voi gia tri la gia tri tham so truyen vao.
    Khi moi lan component re-render thi useRef se khong tao ra tham chieu moi.
    Khi muon focus vao o input khi muon nhap du lieu
     */
    console.log("gia tri cua ref", refCurrent);
    const handleClick = () => {
        // a.number = a.number++
        index++;
        console.log("gia tri index khi click", index);
        setCount(count + 1);
    }
    console.log("gia tri bien ref sau khi click", refCurrent);
    console.log("gia tri index", index);
    return (
        <div>
            <p>gia tri count:{count}</p> 
            <button onClick={handleClick}>click</button><br/>
            <input
            ref={refCurrent} 
            type='text' placeholder='nhap email'></input>
        </div>
    )
}
