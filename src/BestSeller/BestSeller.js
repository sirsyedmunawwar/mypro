import { useEffect, useState } from "react";
import "./BestSeller.css";
import { Rating } from "react-simple-star-rating";
import { NavLink, Link } from "react-router-dom";
import { Content } from "../Api/Api";
const BestSeller = () => {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await Content(); // params in url
      console.log(data);
      getPosts(data);
    };
    fetchData();
  }, []);

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
          {posts.map(
            (item) =>
              item.key >= 9 &&
              item.key <= 16 && (
                <Link
                  to={`api/product/find/${item._id}`}
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
                    <div className="BScardactualprice">{item.actualprice}</div>
                  </div>
                </Link>
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
