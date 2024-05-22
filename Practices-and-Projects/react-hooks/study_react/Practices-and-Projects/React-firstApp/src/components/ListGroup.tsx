import { useState } from "react";

// like a varibles declaration
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedInd, setselectedInd] = useState(-1);
  //hook
  useState;
  return (
    <>
      <div>
        <h1>{heading}</h1>
        {/* {personName.length === 0 ? <p>No values found</p> : null} */}
        {items.length === 0 && <p>No values found</p>}
        <p>check the CODING bruh!</p>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedInd === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setselectedInd(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup; //update clearly bruh!
