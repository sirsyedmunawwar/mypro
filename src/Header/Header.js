import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [store, setstore] = useState(false);
  const Data = [
    { category1: "AirPort & Wireless" },
    { category1: "AppleCare" },
    { category1: "Bags, Shells & Sleeves" },
    { category1: "Business & Security" },
    { category1: "Cables & Docks" },
    { category2: "Charging Devices" },
    { category2: "Connected Home" },
    { category2: "Device Care" },
    { category2: "Display & Graphic" },
    { category2: "Fitness & Sport" },
    { category3: "Headphones " },
    { category3: "Healh3Kit" },
    { category3: "Mice & Keyboards  " },
    { category3: "Music Creation" },
    { category3: "Networking & Server" },
  ];
  return (
    <>
      <div className="header">
        <div className="title"></div>
        <div className="navbar">
          <NavLink
            onClick={() => setstore(false)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setstore(!store)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            STORE
          </NavLink>
          <NavLink
            onClick={() => setstore(false)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            IPHONE
          </NavLink>
          <NavLink
            onClick={() => setstore(false)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            IPOD
          </NavLink>
          <NavLink
            onClick={() => setstore(false)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            MACBOOK
          </NavLink>
          <NavLink
            onClick={() => setstore(false)}
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            ACCESORIES
          </NavLink>
        </div>
        {store === true ? (
          <div className="StoreCategories">
            <div className="StoreCategoriesitem">
              <h3>Category1</h3>

              {Data.map((item) => (
                <p> {item.category1}</p>
              ))}
            </div>
            <div className="StoreCategoriesitem">
              <h3>Category2</h3>

              {Data.map((item) => (
                <p> {item.category2}</p>
              ))}
            </div>
            <div className="StoreCategoriesitem">
              <h3>Category3</h3>

              {Data.map((item) => (
                <p> {item.category3}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Header;
