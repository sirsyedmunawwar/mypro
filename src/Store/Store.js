import React from "react";
import "./Store.css";
import BottomSlide from "../Assets/iphone_6_plus.png";
import { Rating } from "react-simple-star-rating";
import img1 from "../Assets/beats_solo_2.png";
import img2 from "../Assets/H-squared.png";
import RangeSlider from "../Components/RangeSlider";
import valuetext from "../Components/RangeSlider";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
function Store() {
  const Banner = [
    {
      title: "iPhone 8 Plus",
      description: "Performance and design. Taken right to the edge.",
      button: "SHOP NOW",
      image: BottomSlide,
    },
  ];
  const Access = [
    { listitem: "Apple Car", Qty: 5 },
    { listitem: "Air port & wireless", Qty: 5 },
    { listitem: "Cables & Docks", Qty: 5 },
    { listitem: "Cases & Films", Qty: 5 },
    { listitem: "Charging Devices", Qty: 5 },
    { listitem: "Connected home", Qty: 5 },
    { listitem: "Headphones", Qty: 5 },
    ,
  ];
  const Brand = [
    { listitem: "Apple Car", Qty: 5 },
    { listitem: "Air port & wireless", Qty: 5 },
    { listitem: "Cables & Docks", Qty: 5 },
    { listitem: "Cases & Films", Qty: 5 },
    { listitem: "Charging Devices", Qty: 5 },
    { listitem: "Connected home", Qty: 5 },
    { listitem: "Headphones", Qty: 5 },
    ,
  ];
  const BestSeller1 = [
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
  const BestSeller2 = [
    {
      id: 1,
      img: img1,
      title: "2 Beats Solo 2 On Ear Headphones - Black 2",
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
  const BestSeller3 = [
    {
      id: 1,
      img: img1,
      title: "3 Beats Solo 3 On Ear Headphones - Black 3",
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
  const [page1, setpage1] = useState(true);
  const [page2, setpage2] = useState(false);
  const [page3, setpage3] = useState(false);
  const handleclick1 = () => {
    setpage2(!page2);
    setpage1(!page1);
    setpage1(!page3);
  };
  const handleclick2 = () => {
    setpage2(!page2);
    setpage1(!page1);
    setpage3(!page3);
  };
  const handleclick3 = () => {
    setpage2(!page2);
    setpage1(!page1);
    setpage3(!page3);
  };

  return (
    <>
      <div className="storetag">store</div>
      <div className="store">
        <div className="left">
          <div className="top1">
            <h3 className="AccTag">ACCESORIES</h3>
            {Access.map((item) => (
              <div className="listQty">
                <p>{item.listitem}</p>
                <p> {item.Qty}</p>
              </div>
            ))}
          </div>
          <div className="top2">
            <h3>PRICES</h3>
            <span>Ranger:</span>
            <RangeSlider />
          </div>
          <div className="top3">
            <h3>COLOR</h3>
            <div style={{ display: "flex" }}>
              <button className="coloricon1"></button>
              <button className="coloricon2"></button>
              <button className="coloricon3"></button>
              <button className="coloricon4"></button>
              <button className="coloricon5"></button>
              <button className="coloricon6"></button>
            </div>
          </div>
          <div className="top1">
            <h3 className="AccTag">BRAND</h3>
            {Brand.map((item) => (
              <div className="listQty">
                <p>{item.listitem}</p>
                <p> {item.Qty}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="main">
          <div className="storebanner">
            <div className="storetext">
              <h2 className="storetexti8">{Banner[0].title}</h2>
              <p>{Banner[0].description}</p>
              <p style={{ textDecorationLine: "underline" }}>
                {Banner[0].button}
              </p>
            </div>
            <img className="storeimage" src={Banner[0].image}></img>
          </div>
          {page1 === true ? (
            <div className="Scardcontainer">
              {BestSeller1.map((item) => (
                <div className="Scarditems ">
                  <img className="Scardimage" src={item.img}></img>
                  <div className="Scarddetails">
                    <div className="Scardtitle">{item.title}</div>

                    <Rating
                      className="Scardrating"
                      ratingValue={item.rating}
                      readonly
                      size={20}
                    />

                    <div className="Scardprice">{item.price}</div>
                    <div className="BScardactualprice">{item.actualprice}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {page2 === true ? (
            <div className="Scardcontainer">
              {BestSeller2.map((item) => (
                <div className="Scarditems ">
                  <img className="Scardimage" src={item.img}></img>
                  <div className="Scarddetails">
                    <div className="Scardtitle">{item.title}</div>

                    <Rating
                      className="Scardrating"
                      ratingValue={item.rating}
                      readonly
                      size={20}
                    />

                    <div className="Scardprice">{item.price}</div>
                    <div className="BScardactualprice">{item.actualprice}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}{" "}
          {page3 === true ? (
            <div className="Scardcontainer">
              {BestSeller3.map((item) => (
                <div className="Scarditems ">
                  <img className="Scardimage" src={item.img}></img>
                  <div className="Scarddetails">
                    <div className="Scardtitle">{item.title}</div>

                    <Rating
                      className="Scardrating"
                      ratingValue={item.rating}
                      readonly
                      size={20}
                    />

                    <div className="Scardprice">{item.price}</div>
                    <div className="BScardactualprice">{item.actualprice}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          <div className="pagenos">
            <Link
              onClick={() => handleclick1()}
              to="/store"
              className={({ isActive }) =>
                isActive ? "activepage" : "pagebutton"
              }
            >
              1
            </Link>
            <Link
              onClick={() => handleclick2()}
              to="/store"
              className={({ isActive }) =>
                isActive ? "activepage" : "pagebutton"
              }
            >
              2
            </Link>
            <Link
              onClick={() => handleclick3()}
              to="/store"
              className={({ isActive }) =>
                isActive ? "activepage" : "pagebutton"
              }
            >
              3
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
