import React, { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from '';

const Button: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        return <div>Loading...</div>;
    }
    const { state } = themeContext as ThemeContextValue;
    return (
        <button
            style={{
                backgroundColor: state.theme === 'light' ? '#f1f1f1' : '#333',
                color: state.theme === 'light' ? '#333' : '#f1f1f1',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
            }}
        >
            Click me
        </button>
    );
};
export default Button;