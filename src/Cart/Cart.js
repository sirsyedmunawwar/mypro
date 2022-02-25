import React from "react";
import "./Cart.css";
import img1 from "../Assets/beats_solo_2.png";

function Cart() {
  const cartitem = [
    {
      id: 1,
      img: img1,
      title: "1 Beats Solo 2 On Ear Headphones - Black 1",
      rating: 75,
      price: " $499",
      actualprice: "$599",
    },
  ];
  return (
    <>
      <div className="cart">
        <div className="cartheadings">
          <p className="cartitemproduct">PRODUCT</p>
          <p className="cartitem">UNIT PRICE</p>
          <p className="cartitem">QTY</p>
          <p className="cartitem"> PRICE</p>
        </div>
        {cartitem.map((item) => (
          <div className="cartproducts">
            <img className="cartimage" src={item.img}></img>
            <div className="carttitle ">{item.title}</div>
            <div className="cartprice ">{item.price}</div>
            <div className="cartplusminus ">
              <button>-</button>
              <p>2</p>
              <button>+</button>
            </div>
            <div className="carttotalprice ">total</div>
          </div>
        ))}
        <div className="total">
          <p>Subtotal</p>
          <p>Shipping fee</p>
          <p>Coupon</p>
          <h3>TOTAL</h3>
          <button className="checkout">Check out</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
