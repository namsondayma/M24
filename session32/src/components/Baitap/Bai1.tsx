import React, { useState } from "react";

const MyForm: React.FC = () => {
    const [text, setText] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Text:", text);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">email</label>
            <input
                type="text"
                id="text"
                name="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default MyForm;