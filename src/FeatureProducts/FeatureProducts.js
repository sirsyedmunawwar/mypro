import React, { useState, useEffect } from "react";
import "./FeatureProducts.css";
import { Rating } from "react-simple-star-rating";
import img1 from "../Assets/beats_solo_2.png";
import img2 from "../Assets/H-squared.png";
import { Content } from "../Api/Api";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function FeatureProducts() {
  const [posts, getPosts] = useState([]);
  const {
    state: { cart, products },
    dispatch,
  } = CartState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let data = await Content(); // params in url
  //     console.log(data);
  //     getPosts(data);
  //   };
  //   fetchData();
  // }, []);

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

        {products.map(
          (item) =>
            item.key >= left &&
            item.key <= right && (
              <Link
                style={{ textDecorationLine: "none" }}
                to={`/${item._id}`}
                className="carditems "
              >
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
              </Link>
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
