import React, { useState } from 'react';

const MyForm: React.FC = () => {
    const [color, setColor] = useState('');
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const colorInput = event.currentTarget.elements.namedItem('color') as HTMLInputElement;
        const selectedColor = colorInput.value;
        setColor(selectedColor);
    };
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="color" name="color" />
                <button type="submit">Submit</button>
            </form>

            <div>
                <p>Mã màu sắc: {color}</p>
            </div>
        </div>
    );
};
export default MyForm;