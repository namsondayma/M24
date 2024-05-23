import React, { useState } from "react";

const MyForm: React.FC = () => {
    const [date, setText] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("date:", date);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(event) => setText(event.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};
export default MyForm;