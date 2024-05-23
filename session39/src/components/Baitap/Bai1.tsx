import React, { createContext, useState, ReactNode } from 'react';
interface ThemeContextValue {
    theme: string;
    setTheme: (theme: string) => void;
}
export const ThemeContext = createContext<ThemeContextValue | null>(null);
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};