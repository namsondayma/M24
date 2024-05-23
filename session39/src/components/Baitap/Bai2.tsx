import React, { createContext, useReducer, ReactNode, useContext } from 'react';

type Action = { type: 'SET_THEME'; payload: string };
type State = { theme: string };
const themeReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_THEME':
            return { theme: action.payload };
        default:
            return state;
    }
};
interface ThemeContextValue {
    state: State;
    dispatch: React.Dispatch<Action>;
}
export const ThemeContext = createContext<ThemeContextValue | null>(null);
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, { theme: 'blue' });
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};
const App: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        return <div>Loading...</div>;
    }
    const { state, dispatch } = themeContext;
    return (
        <div className={`app ${state.theme}`}>
            <h1>My App</h1>
            <button onClick={() => dispatch({ type: 'SET_THEME', payload: 'light' })}>
                Set Light Theme
            </button>
            <button onClick={() => dispatch({ type: 'SET_THEME', payload: 'dark' })}>
                Set Dark Theme
            </button>
        </div>
    );
};
export default App;