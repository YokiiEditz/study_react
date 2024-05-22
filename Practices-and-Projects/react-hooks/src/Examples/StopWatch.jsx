import { useState, useEffect } from "react"

const StopWatch = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, (1000));
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number) {
        const addZero = (number < 10 ? "0" : "")
        const result = addZero + number
        return result;
    }

    return (
        <div className="clock-main">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default StopWatch