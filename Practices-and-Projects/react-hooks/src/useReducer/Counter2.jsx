import { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
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
    const styled = { margin: "15px 10px", display: "flex", alignItems: "center", gap: "30px" }
    return (
        <>
            <section>
                <div style={styled}>
                    <p>First Count is {count.firstCounter}</p>
                    <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
                    <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
                    <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment by 5</button>
                    <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement by 5</button>
                </div>
                <div style={styled}>
                    <p>Second count is {count.secondCounter}</p>
                    <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment</button>
                    <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement</button>
                    <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>increment by 5</button>
                    <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>decrement by 5</button>
                </div>
                <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            </section>
        </>
    )
}

export default Counter1