import { useEffect, useMemo, useState, useCallback } from 'react'
import List from './List'

const CallBacks = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((n) => {
        return [number + n, number + 1 + n, number + 2 + n]
    }, [number])

    const doubleNumber = useMemo(() => {
        return slowFunc(number)
    }, [number])

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    useEffect(() => {
        console.log("Theme Chnaged");
    }, [dark])

    return (
        <>
            <input type="text" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <List getItems={getItems} />
            <br />
            <div style={themeStyles}>{doubleNumber}</div>
            <button onClick={() => setDark(prev => !prev)}>Toggle</button>
        </>
    )
}

function slowFunc(num) {
    for (let i = 0; i <= 1000000000; i++) { /* empty */ }
    return num * 2
}

export default CallBacks