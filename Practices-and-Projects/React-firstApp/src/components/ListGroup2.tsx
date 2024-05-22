// import { useState } from "react";

// //hooks - state(useState)

// function ListGroup() {
//   let personName = ["abi", "bala", "chris", "peter"];
//   const [selectedInd, setselectedInd] = useState(-1);

//   //hook
//   useState;

//   return (
//     <>
//       <div>
//         <h1>This is Topic</h1>
//         {/* {personName.length === 0 ? <p>No values found</p> : null} */}
//         {personName.length === 0 && <p>No values found</p>}
//         <p>check the CODING bruh!</p>
//         <ul className="list-group">
//           {personName.map((item, index) => (
//             <li
//               className={
//                 selectedInd === index
//                   ? "list-group-item active"
//                   : "list-group-item"
//               }
//               key={item}
//               onClick={() => {
//                 setselectedInd(index);
//               }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// // export default ListGroup; //update clearly bruh!
