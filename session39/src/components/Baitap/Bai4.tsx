import React, { useState, createContext, useContext } from 'react';

type ThemeState = 'light' | 'dark';
type ThemeContextValue = {
    state: ThemeState;
    toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextValue | null>(null);
const App: React.FC = () => {
    const [theme, setTheme] = useState<ThemeState>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ state: theme, toggleTheme }}>
            <div>
                <Button />
                <p>Current theme: {theme}</p>
            </div>
        </ThemeContext.Provider>
    );
};
const Button: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return <div>Loading...</div>;
    }
    const { state, toggleTheme } = themeContext;
    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: state === 'light' ? 'blue' : 'red',
                color: 'white',
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
export default App;