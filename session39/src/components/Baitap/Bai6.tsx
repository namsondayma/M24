import React, { useReducer } from 'react';

type State = {
    count: number;
};
type Action = {
    type: 'DECREMENT';
};
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'DECREMENT':
            return { count: state.count > 0 ? state.count - 1 : state.count };
        default:
            return state;
    }
};
const Decrease: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 10 });
    const handleClick = () => {
        dispatch({ type: 'DECREMENT' });
    };
    return (
        <div>
            <button onClick={handleClick}>Decrease</button>
            <p>Current count: {state.count}</p>
        </div>
    );
};
export default Decrease;