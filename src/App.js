import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accessories from "./Accessories/Accessories";
import "./App.css";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Iphone from "./Iphone/Iphone";
import Ipod from "./Ipod/Ipod";
import Macbook from "./Macbook/Macbook";
import Product from "./Product/Product";
import Store from "./Store/Store";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          {/* <Route path="/Iphone" element={<Product />}></Route> */}
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Macbook" element={<Login />}></Route>
          <Route path="/Accesories" element={<Signup />}></Route>
          <Route path="/:id" element={<Product />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
