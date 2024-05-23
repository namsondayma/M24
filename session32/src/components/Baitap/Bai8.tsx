import React, { useState } from 'react';

const MyForm: React.FC = () => {
    const [hobbies, setHobbies] = useState<string[]>([]);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const checkboxes = event.currentTarget.elements["hobby"];
        const selectedHobbies: string[] = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if ((checkboxes[i] as HTMLInputElement).checked) {
                selectedHobbies.push((checkboxes[i] as HTMLInputElement).value);
            }
        }
        setHobbies(selectedHobbies);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="checkbox" name="hobby" value="chơi game" /> Reading
                </label>
                <br />
                <label>
                    <input type="checkbox" name="hobby" value="nấu ăn" /> Cooking
                </label>
                <br />
                <label>
                    <input type="checkbox" name="hobby" value="truyện tranh" /> Sports
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>Sở thích của bạn:</p>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default MyForm;