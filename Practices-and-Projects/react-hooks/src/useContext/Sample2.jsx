// import { useContext } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const Sample2 = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle</button>
      <div style={themeStyles}>1st way using useContext() </div>

      {/* <ThemeContext.Consumer>
        {(darkTheme) => (
          <div
            style={{
              backgroundColor: darkTheme ? "black" : "grey",
              color: darkTheme ? "white" : "black",
              padding: "2rem",
              margin: "2rem",
            }}
          >
            2nd way not using useContext(){" "}
          </div>
        )}
      </ThemeContext.Consumer> */}
    </>
  );
};

export default Sample2;
