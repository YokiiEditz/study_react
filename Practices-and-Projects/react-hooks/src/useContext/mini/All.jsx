import { createContext } from "react";

export const ColorContext = createContext();

// export function useColors() {
//   return useContext(ColorContext);
// }

function AllContext({ children }) {
  const fontColors = ["brown", "red", "blue"];
  const backgroundColors = ["#A4DB50", "#7B3BDC", "#F9EF06"];

  return (
    <>
      {/* <p>Context is here</p>
      <ColorContext.Provider value={{ fontColors, backgroundColors }}>
        <Main />
      </ColorContext.Provider> */}

      <ColorContext.Provider value={{ fontColors, backgroundColors }}>
        {children}
      </ColorContext.Provider>
    </>
  );
}

export default AllContext;
