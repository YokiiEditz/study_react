import { createContext, useState } from "react";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import ThemeProvider from "./ThemeContext";

export const CountContext = createContext();

const Sample1 = () => {
  const [countValue, setCountValue] = useState(10);

  return (
    <>
      <section className="sample">
        {/* <CountContext.Provider
          value={{
            count: countValue,
            setcount: setCountValue,
          }}
        ></CountContext.Provider>
        <br /> */}

        <ThemeProvider>
          <Sample2 />
        </ThemeProvider>

        <br />

        <Sample3 countValue={countValue} setCountValue={setCountValue} />
      </section>
    </>
  );
};

export default Sample1;
