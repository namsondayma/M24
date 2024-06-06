import React from 'react'
import "./login.scss"

export default function Login() {
    return (
        <div className='login'>
            <div className='login-name'>
                <label htmlFor=''>userName</label>
                <input className='login-input' type='text'></input>
            </div>
            <div className='login-pass'>
                <label htmlFor=''>password</label>
                <input type='text'></input>
            </div>
            <button>login</button>
        </div>
    )
}
