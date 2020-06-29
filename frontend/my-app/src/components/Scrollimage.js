import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import logoinr from "./logoinr.jpg";
const images = [

  require("./images/dreamstime_xxl_82948419.jpg"),
  require("./images/dreamstime_xxl_118325648.jpg"),
  require("./images/dreamstime_xxl_119611315.jpg"),
  require("./images/dreamstime_xxl_114866821.jpg"),
  require("./images/dreamstime_xxl_115111005.jpg"),
  require("./images/dreamstime_xxl_110938098.jpg"),
  require("./images/dreamstime_xxl_82993981.jpg")
  
 
      
];

function Scrollimage() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 6) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "black",
        height: "83vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

export default Scrollimage;