import React from "react";
import "./BestSeller.css";
import { Rating } from "react-simple-star-rating";

import { NavLink, Link } from "react-router-dom";
import img1 from "../Assets/beats_solo_2.png";
import img2 from "../Assets/H-squared.png";
const BestSeller = () => {
  const BestSeller = [
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
  return (
    <>
      <div className="bestseller">
        <div className="besttitle">BEST SELLER</div>
        <div className="bestsellernavbar">
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            All
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/store"
          >
            Mac
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/Iphone"
          >
            iPhone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/Ipod"
          >
            ipad
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/Macbook"
          >
            ipod
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/Accesories"
          >
            Accesories
          </NavLink>
        </div>

        <div className="BScardcontainer">
          {BestSeller.map((item) => (
            <div className="BScarditems ">
              <img className="BScardimage" src={item.img}></img>
              <div className="BScarddetails">
                <div className="BScardtitle">{item.title}</div>

                <Rating
                  className="BScardrating"
                  ratingValue={item.rating}
                  readonly
                  size={20}
                />

                <div className="BScardprice">{item.price}</div>
                <div className="BScardactualprice">{item.actualprice}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="loadmorediv">
          <Link className="loadmorebutton" to="/store">
            LOAD MORE
          </Link>
          <hr
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#33A0FF",
              border: "none",
            }}
          ></hr>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
