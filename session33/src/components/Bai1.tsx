import react, { useState } from 'react';

function Bai1() {
    const [name, setName] = useState('Nguyễn Nam Sơn');
    return (
        <div>
            <h1>Họ và tên: {name}!</h1>
        </div>
    );
}
export default Bai1;