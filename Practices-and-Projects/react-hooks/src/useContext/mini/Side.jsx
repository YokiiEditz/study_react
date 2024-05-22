import { useState } from "react";
import { useContext } from "react";
// import { useColors } from "./All";
import { ColorContext } from "./All";

const Side = () => {
  const { fontColors, backgroundColors } = useContext(ColorContext);
  //const { fontColors, backgroundColors } = useColors();
  const [fontColor, setFontColor] = useState("white");
  const [bgColor, setBgColor] = useState("black");

  //   console.log("font", fontColors, "bg:", backgroundColors);

  function random(color) {
    let random = Math.floor(Math.random() * color.length);
    return color[random];
  }

  function colorSetter() {
    const fontColor = random(fontColors);
    const backGroundColor = random(backgroundColors);
    setFontColor(fontColor);
    setBgColor(backGroundColor);
  }

  return (
    <>
      <div>
        <p>Side</p>
        <div
          style={{
            margin: "20px",
            padding: "20px",
            color: fontColor,
            backgroundColor: bgColor,
          }}
        >
          <span>Text is {fontColor}</span>
          <span> Bg is {bgColor}</span>
        </div>
        <button onClick={colorSetter}>random Generator</button>
      </div>
    </>
  );
};

export default Side;
