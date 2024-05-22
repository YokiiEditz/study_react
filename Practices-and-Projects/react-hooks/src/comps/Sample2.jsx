import { useEffect, useState } from "react";

const Sample2 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [resourceType, setResourceType] = useState("posts")

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        console.log("resource changed!!");
        return () => { console.log('return from changes'); }
    }, [resourceType])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <>
            <div>{windowWidth}</div><br />
            <section style={{ display: "flex", gap: "10px" }}>
                <div>
                    <button onClick={() => setResourceType("posts")}>posts</button>
                </div>
                <div>
                    <button onClick={() => setResourceType("users")}>users</button>
                </div>
                <div>
                    <button onClick={() => setResourceType("comments")}>comments</button>
                </div>
            </section>
            <p>{resourceType}</p>
        </>
    );
};

export default Sample2