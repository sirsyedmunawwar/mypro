import React, { useState } from "react";
import "./FeatureProducts.css";
import { Rating } from "react-simple-star-rating";
import img1 from "../Assets/beats_solo_2.png";
import img2 from "../Assets/H-squared.png";
function FeatureProducts() {
  const card = [
    {
      id: 1,
      img: img1,
      title: "1 Beats Solo 2 On Ear Headphones - Black 1",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 2,
      img: img2,
      title: "2 Beats Solo 2 On Ear Headphones - Black 2",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 3,
      img: img1,
      title: "3 Beats Solo 2 On Ear Headphones - Black 3",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 4,
      img: img1,
      title: "4 Beats Solo 2 On Ear Headphones - Black 4",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 5,
      img: img1,
      title: "5 Beats Solo 2 On Ear Headphones - Black 5",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 6,
      img: img1,
      title: "5 Beats Solo 2 On Ear Headphones - Black 6",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 7,
      img: img1,
      title: "5 Beats Solo 2 On Ear Headphones - Black 7",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
    {
      id: 8,
      img: img1,
      title: "5 Beats Solo 2 On Ear Headphones - Black 8",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
  ];
  const [left, setleft] = useState(1);
  const [right, setright] = useState(3);

  const handleClick = (direction) => {
    if (direction === "right") {
      if (right < 8) {
        setright(right + 1);
        setleft(left + 1);
      }
    } else if (left > 1) {
      {
        setright(right - 1);
        setleft(left - 1);
      }
    }
  };
  return (
    <>
      <h2 className="FP">FEATURED PRODUCTS</h2>

      <div className="cardcontainer">
        <button
          style={{ border: " none", backgroundColor: "#ffffff" }}
          direction="left"
          onClick={() => handleClick("left")}
        >
          <i
            className="fa-solid fa-angle-left "
            style={{ fontSize: "40px" }}
          ></i>
        </button>

        {card.map(
          (item) =>
            item.id >= left &&
            item.id <= right && (
              <div className="carditems ">
                <img className="cardimage" src={item.img}></img>
                <div className="carddetails">
                  <div className="cardtitle">{item.title}</div>

                  <Rating
                    className="cardrating"
                    ratingValue={item.rating}
                    readonly
                    size={15}
                  />

                  <span className="cardprice">{item.price}</span>
                  <span className="cardactualprice">{item.actualprice}</span>
                </div>
              </div>
            )
        )}

        <button
          style={{ border: " none", backgroundColor: "#ffffff" }}
          direction="right"
          onClick={() => handleClick("right")}
        >
          <i
            className="fa-solid fa-angle-right "
            style={{ fontSize: "40px" }}
          ></i>
        </button>
      </div>
    </>
  );
}
export default FeatureProducts;
