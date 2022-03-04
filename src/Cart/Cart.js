import React from "react";
import "./Cart.css";
import img1 from "../Assets/beats_solo_2.png";
import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function Cart() {
  let navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  // const [total, setTotal] = useState();

  // useEffect(() => {
  //   setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  // }, [cart]
  // const cartitem = [
  //   {
  //     id: 1,
  //     img: img1,
  //     title: "1 Beats Solo 2 On Ear Headphones - Black 1",
  //     rating: 75,
  //     price: " $499",
  //     actualprice: "$599",
  //   },
  // ];
  console.log(cart);
  return (
    <>
      {cart.length == 0 ? (
        <h1
          style={{
            textAlign: "center",
            height: "40vh",
            paddingTop: "20vh",
            opacity: "0.7",
          }}
        >
          Cart is Empty
        </h1>
      ) : (
        <div className="cart">
          <div className="cartheadings">
            <p className="cartitemproduct">PRODUCT</p>
            {/* <p className="cartitem">UNIT PRICE</p>
          <p className="cartitem">QTY</p> */}
            <p className="cartitem"> PRICE</p>
          </div>

          {cart.map((item) => (
            <div className="cartproducts">
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  })
                }
              >
                <CloseIcon />
              </button>
              <img className="cartimage" src={item.img}></img>
              <div className="carttitle ">{item.title}</div>
              <div className="cartprice ">{item.price}</div>
              <div className="cartplusminus ">
                {/* <select
                as="select"
                value={item.qty}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: {
                      key: item.key,
                      qty: e.target.value,
                    },
                  })
                }
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select> */}
              </div>
              {/* <div className="carttotalprice ">total</div> */}
            </div>
          ))}

          <div className="total">
            <p>Subtotal ({cart.length * 499})</p>
            <p>Shipping fee 100</p>
            <p>Coupon</p>
            <h3>TOTAL {cart.length * 499 + 100}</h3>

            <button disabled={cart.length === 0} className="checkout">
              Check out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
