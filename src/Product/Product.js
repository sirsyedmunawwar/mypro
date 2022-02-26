import { useEffect, useState } from "react";
import img2 from "../Assets/H-squared.png";
import img1 from "../Assets/beats_solo_2.png";
import { Rating } from "react-simple-star-rating";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Content } from "../Api/Api";

function Product() {
  const [posts, getPosts] = useState([]);
  const { id } = useParams();

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
      <div className="Pcardcontainer">
        {posts.map((item) =>
          item._id === id ? (
            <div className="Pcarditems ">
              <img className="Pcardimage" src={item.img}></img>
              <div className="Pcarddetails">
                <div className="Scardtitle">{item.title}</div>
                <Rating
                  className="Pcardrating"
                  ratingValue={item.rating}
                  readonly
                  size={30}
                />
                <div className="Pcardprice">{item.price}</div>
                <div className="Pcardactualprice">{item.actualprice}</div>
              </div>
              <button className="productbutton1">Add to Cart</button>
              <button className="productbutton2">Buy Now</button>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}

export default Product;
