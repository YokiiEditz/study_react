import { useContext } from "react";

import { UserContext, ColorContext } from "./CompA";

function CompC() {
  const user = useContext(UserContext);

  //const colors = useContext(ColorContext)

  //         < ul >
  //     {
  //         colors && colors.map((color, index) => (
  //             <li key={index} style={{ backgroundColor: `${color}`, }} > {color}</li>
  //         ))
  // }
  //                 </ul >

  return (
    <>
      <div className="box">
        <h1>Component C</h1>
        <h2>{`${user} is the Name`}</h2>

        <ColorContext.Consumer>
          {(colors) =>
            colors && (
              <ul>
                {colors.map((color, index) => (
                  <li key={index} style={{ backgroundColor: `${color}` }}>
                    Color is {color}
                  </li>
                ))}
              </ul>
            )
          }
        </ColorContext.Consumer>
      </div>
    </>
  );
}

export default CompC;
