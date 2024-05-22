import { useEffect, useState } from "react";

import { imageData } from '../imagedata'

const ImageSilder = () => {
  const [image, setImage] = useState(0);

  const handlePrevImage = () => {
    if (image === 0) {
      setImage(imageData.length - 1);
    } else {
      setImage(image - 1);
    }
  };

  const handleNextImage = () => {
    setImage((image + 1) % imageData.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextImage();
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [image]);

  const imageStyles = {
    width: "450px",
    height: "320px",
    padding: "0px 40px",
  };
  const buttonStyles = {
    margin: "10px",
    padding: "10px",
  };

  return (
    <>
      <h3>Demo Interview</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={buttonStyles} onClick={handlePrevImage}>
          Previous
        </button>
        {imageData.map((url, id) => (
          <img
            key={id}
            src={url}
            style={{
              ...imageStyles,
              border: "1px dotted",
              objectFit: "contain", // CSS properties with hyphens should be camelCased in React
              display: image === id ? "block" : "none" // Corrected conditional display property
            }}
            alt="nature-images"
          />

        ))}
        <button style={buttonStyles} onClick={handleNextImage}>
          Next
        </button>
      </div>
    </>
  );
};

export default ImageSilder
