import { useReducer } from 'react'

const initialState = 100
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
    // if (action === 'increment') {
    //     return state + 1;
    // }
    // else {
    //     return initialState;
    // }
}

const Counter1 = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default Counter1