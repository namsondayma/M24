import React, { useState } from 'react'

export default function Bai5a() {
    const [show, setShow] = useState<boolean>(true);

  return (
    <div>
        <h3>Nếu giá trị là true:</h3>
        {
            show ? <button>Hiện</button>:<button>Ẩn</button>
        }
        <button onClick={()=>setShow(!show)}>click</button>
    </div>
  )
}