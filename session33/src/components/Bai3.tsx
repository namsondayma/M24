import { useState } from 'react';

function Bai3() {
    const [textColor, setTextColor] = useState('black');
    const handleColorChange = () => {
        setTextColor(textColor === 'black' ? 'red' : 'black');
    };
    return (
        <div>
            <p style={{ color: textColor }}>Tiêu đề văn bản</p>
            <button onClick={handleColorChange}>Thay đổi màu</button>
        </div>
    );
}
export default Bai3;