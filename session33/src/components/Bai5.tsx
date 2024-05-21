import { useState } from 'react';

function Bai5() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>{inputValue}</p>
        </div>
    );
}
export default Bai5;