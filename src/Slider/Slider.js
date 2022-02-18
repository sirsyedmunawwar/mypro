import "./Slider.css";
import { useEffect, useRef, useState } from "react";
const slide1 = require("../Assets/corousel_1.png");
const slide2 = require("../Assets/corousel_2.png");
const slide3 = require("../Assets/corousel_3.png");

const colors = [slide1, slide2, slide3];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div>
      <img className="slideshow" src={colors[index]} />
    </div>
  );
}

export default Slideshow;
