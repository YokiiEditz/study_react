// //event handler
// import { MouseEvent } from "react";

// function ListGroup() {
//   let personName = ["abi", "bala", "chris", "peter"];
//   let selectedInd = 0;

//   //   personName = [];

//   const handleClick = (event: MouseEvent) => {
//     console.log(event);
//   };

//   return (
//     <>
//       <div>
//         <h1>This is Topic</h1>
//         {/* {personName.length === 0 ? <p>No values found</p> : null} */}
//         {personName.length === 0 && <p>No values found</p>}
//         <p>check the CODING bruh!</p>
//         <ul className="list-group">
//           {personName.map((item, index) => (
//             <li className="list-group-item" key={item} onClick={handleClick}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// // export default ListGroup;      //must be changed.
