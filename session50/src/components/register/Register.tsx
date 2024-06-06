import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const register=(e:React.FormEvent)=>{
        // kiểm tra mọi thông tin người dùng nhập ok hết thì chuyển sang trang login
        // ngăn chặn reload
        e.preventDefault();
        // dùng hook navigate
        const navigate = useNavigate()
        navigate("/login")
    }
  return (
    <div>
        <form onSubmit={register} action="">
            <label htmlFor="">Email</label>
            <input type="text" /><br />
            <label htmlFor="">Name</label>
            <input type="text" /><br />
            <label htmlFor="">Password</label>
            <input type="text" /><br />
            <label htmlFor="">Comfirm Password</label>
            <input type="text" /><br />
            <button>register</button>
        </form>
    </div>
  )
}