import { useState } from "react";

const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/XsdmR2c/1.png",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
  },
];
const timeoutRef = React.useRef(null);

function resetTimeout() {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
}

React.useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
      ),
    delay
  );
  return () => {
    resetTimeout();
  };
}, [index]);

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);

  return (
    <div>
      {sliderItems.map((item) => (
        <image src={item.img} />
      ))}
    </div>
  );
};

export default Slider;
