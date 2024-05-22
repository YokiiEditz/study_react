import { useEffect, useState } from "react"


const Sample3 = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("event!!!!!!");

        return () => {
            console.log("removing...");
            window.removeEventListener("resize", handleResize)
            console.log("removed");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <div style={{ border: "1px solid blue" }}>
                <p>{width}px</p>
                <p>{height}px</p>
            </div >
        </>
    )
}

export default Sample3