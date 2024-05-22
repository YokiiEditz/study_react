import { useEffect, useState } from "react"

const List = ({ getItems }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(3))
        console.log("Updating Items");
    }, [getItems])

    return items.map((item, id) => <div key={id}>{item}</div>)
}

export default List