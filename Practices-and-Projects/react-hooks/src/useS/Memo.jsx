import { useState, useMemo } from "react"

const Memo = () => {

    const [count, setCount] = useState(0);
    const [counttwo, setCounttwo] = useState(0);

    const buttonStyled = {
        margin: "8px",
        padding: "10px",
        border: "1px solid blue",
    };

    function increm() {
        setCount((count) => count + 1);
    }

    function decrem() {
        setCounttwo((count) => count + 1);
    }


    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        console.log(i);
        return count % 2 === 0
    }, [count])

    return (
        <>
            <h2>useMemo HOOK</h2>
            <br />
            <div>
                <button style={buttonStyled} onClick={increm}>
                    Count is {count}
                </button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <br />

            <div>
                <button style={buttonStyled} onClick={decrem}>
                    Count is {counttwo}
                </button></div>
        </>
    )
}

export default Memo

