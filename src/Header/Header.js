import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartState } from "../context/Context";
function Header() {
  const [store, setstore] = useState(false);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
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
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <>
      <div className="header">
        <Link to="/cart" onClick={() => setstore(false)}>
          <IconButton aria-label="cart" className="carticon">
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
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
