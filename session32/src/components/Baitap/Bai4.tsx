import React, { useState } from 'react';

const MyForm: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setProgress(value);
    };
    const handleSubmit = () => {
        console.log('Giá trị:', progress);
    };
    return (
        <div>
            <div>
                <label htmlFor="progress">Tiến độ hoàn thành:</label>
                <input
                    type="range"
                    id="progress"
                    min={0}
                    max={100}
                    step={1}
                    value={progress}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <p>Giá trị: {progress}</p>
            </div>
        </div>
    );
};
export default MyForm;