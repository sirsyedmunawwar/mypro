import React from "react";
import "./Store.css";
import BottomSlide from "../Assets/iphone_6_plus.png";
import { Rating } from "react-simple-star-rating";
import img1 from "../Assets/beats_solo_2.png";
import img2 from "../Assets/H-squared.png";
import RangeSlider from "../Components/RangeSlider";
import valuetext from "../Components/RangeSlider";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Content } from "../Api/Api";
import { CartState } from "../context/Context";
function Store() {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   let data = await Content(); // params in url
    //   console.log(data);
    //   getPosts(data);
    // };
    // fetchData();
  }, []);
  const {
    state: { cart, products },
    dispatch,
  } = CartState();

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

  const [page1, setpage1] = useState(true);
  const [page2, setpage2] = useState(false);
  const [page3, setpage3] = useState(false);
  const handleclick1 = () => {
    setpage1(true);
    setpage2(false);
    setpage3(false);
  };
  const handleclick2 = () => {
    setpage1(false);
    setpage2(true);
    setpage3(false);
  };
  const handleclick3 = () => {
    setpage1(false);
    setpage2(false);
    setpage3(true);
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
          {page1 ? (
            <div className="Scardcontainer">
              {products.map(
                (item) =>
                  item.key >= 17 &&
                  item.key <= 28 && (
                    <Link
                      className="Scarditems "
                      style={{ textDecorationLine: "none" }}
                      to={`/${item._id}`}
                    >
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
                        <div className="BScardactualprice">
                          {item.actualprice}
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          ) : (
            ""
          )}
          {products ? (
            <div className="Scardcontainer">
              {posts.map(
                (item) =>
                  item.key >= 29 &&
                  item.key <= 40 && (
                    <Link
                      className="Scarditems "
                      style={{ textDecorationLine: "none" }}
                      to={`/${item._id}`}
                    >
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
                        <div className="BScardactualprice">
                          {item.actualprice}
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          ) : (
            ""
          )}{" "}
          {products ? (
            <div className="Scardcontainer">
              {posts.map(
                (item) =>
                  item.key >= 41 &&
                  item.key <= 55 && (
                    <Link
                      className="Scarditems "
                      style={{ textDecorationLine: "none" }}
                      to={`/${item._id}`}
                    >
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
                        <div className="BScardactualprice">
                          {item.actualprice}
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          ) : (
            ""
          )}
          <div className="pagenos">
            <button
              onClick={() => handleclick1()}
              to="/store"
              className={page1 ? "activepage" : "pagebutton"}
            >
              1
            </button>
            <button
              onClick={() => handleclick2()}
              to="/store"
              className={page2 ? "activepage" : "pagebutton"}
            >
              2
            </button>
            <button
              onClick={() => handleclick3()}
              to="/store"
              className={page3 ? "activepage" : "pagebutton"}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
