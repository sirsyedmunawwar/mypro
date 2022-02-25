import { useEffect } from "react";
import img2 from "../Assets/H-squared.png";
import img1 from "../Assets/beats_solo_2.png";
import { Rating } from "react-simple-star-rating";
import "./Product.css";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
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
      <div className="Pcardcontainer">
        {BestSeller.map((item) =>
          item.id === id ? (
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
