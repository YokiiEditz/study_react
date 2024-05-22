import { useEffect, useRef, useState } from "react";

const Ref = () => {

    const [timer, setTimer] = useState(0)

    const intervalRef = useRef()
    const inputRef = useRef();
    const ref = useRef(0);

    useEffect(() => {

        console.log("COMP RENDERED!!");

        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);

    function handleClick() {
        ref.current++;
        console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "grey"
        console.log(inputRef);
    }

    return (
        <>
            <div>
                Timer = {timer}
                <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
            </div>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleClick}>Click me!</button>
            </div>
        </>
    );
};

export default Ref;
