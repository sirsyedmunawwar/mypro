import { useEffect, useState } from "react";
import "./BestSeller.css";
import { Rating } from "react-simple-star-rating";
import { NavLink, Link } from "react-router-dom";
import { Content } from "../Api/Api";
import { CartState } from "../context/Context";
const BestSeller = () => {
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

  // const {
  //   state: { products },
  // } = CartState();
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
            to="/"
          >
            Mac
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            iPhone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            ipad
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            ipod
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activenavitem" : "navitem"
            }
            to="/"
          >
            Accesories
          </NavLink>
        </div>

        <div className="BScardcontainer">
          {products.map(
            (item) =>
              item.key >= 9 &&
              item.key <= 16 && (
                <div>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    to={`/${item._id}`}
                    className="BScarditems "
                  >
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
                      <div className="BScardactualprice">
                        {item.actualprice}
                      </div>
                    </div>
                  </Link>

                  {cart.some((p) => p.key === item.key) ? (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              )
          )}
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
