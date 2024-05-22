import { useState, useEffect } from "react";

const Sample = () => {
    const buttonStyled = {
        margin: "8px",
        padding: "10px",
        border: "1px solid blue",
    };

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Red");
    const [res, setRes] = useState("comments");
    const [items, setItems] = useState([{ id: 0 }]);

    const API_URL = "http://localhost:3500/items";

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                console.log(response);
                const listItems = await response.json();
                console.log(listItems);
                setItems(listItems);
            } catch (err) {
                console.log(err);
            }
        };
        (async () => await fetchItems())();
    }, []);

    function increm() {
        setCount((count) => count + 1);
    }
    function decrem() {
        setCount((count) => count - 1);
    }
    function button() {
        var result = ["Yellow", "Blue", "Green"];
        var random = Math.floor(Math.random() * 3);
        var output = result[random];
        setColor(output);
    }

    return (
        <>

            <p>useState & useEffect HOOK</p>
            <button style={buttonStyled} onClick={decrem}>
                -
            </button>

            <span>{count}</span>
            <span style={buttonStyled}>{color}</span>

            <button style={buttonStyled} onClick={increm}>
                +
            </button>

            <button onClick={() => button()}>Btn</button>

            <section style={{ display: "flex", gap: "10px" }}>
                <div>
                    <button onClick={() => setRes("posts")}>posts</button>
                </div>
                <div>
                    <button onClick={() => setRes("users")}>users</button>
                </div>
                <div>
                    <button onClick={() => setRes("comments")}>comments</button>
                </div>
            </section>
            <p>{res}</p>
            <p>
                {items.map((item) => (
                    <span key={item.id}>
                        {item.name} : {item.role}
                        <br />
                    </span>
                ))}
            </p>
        </>
    );
};

export default Sample;
