import React, { useReducer } from 'react';

type State = {
    count: number;
};
type Action = {
    type: 'INCREMENT';
};
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        default:
            return state;
    }
};
const Increase: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const handleClick = () => {
        dispatch({ type: 'INCREMENT' });
    };
    return (
        <div>
            <button onClick={handleClick}>Increase</button>
            <p>Current count: {state.count}</p>
        </div>
    );
};
export default Increase;