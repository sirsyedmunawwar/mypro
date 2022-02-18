import React from "react";
import "./BottomDetails.css";
import BottomSlide from "../Assets/iphone_6_plus.png";
import image1 from "../Assets/shipping.svg";
import image2 from "../Assets/refund.svg";
import image3 from "../Assets/support.svg";

function BottomDetails() {
  // const IMG = (imgName) => {
  //   return require(`./images/${imgName}`);
  // };
  // <img src={IMG("sunset.jpg")} alt="Sunset View on Beach" />;
  const Banner = [
    {
      title: "iPhone 6 Plus",
      description: "Performance and design. Taken right to the edge.",
      button: "SHOP NOW",
      image: BottomSlide,
    },
  ];
  const service = [
    {
      image: image1,
      title: "FREE SHIPPING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      image: image2,
      title: "100% REFUND",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      image: image3,
      title: "SUPPORT 24/7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];
  return (
    <>
      <div className="bottom">
        <div className="bootombanner">
          <div className="bannertext">
            <h2 className="bannertexti6">{Banner[0].title}</h2>
            <p>{Banner[0].description}</p>
            <p style={{ textDecorationLine: "underline" }}>
              {Banner[0].button}
            </p>
          </div>
          <img className="bannerimage" src={Banner[0].image}></img>
        </div>
        <div className="bootomservice">
          {service.map((item) => (
            <div className="servicediv">
              <img src={item.image} className="serviceimage"></img>
              <h2 className="servicetitle">{item.title}</h2>
              <div className="servicedescription">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BottomDetails;
