import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accessories from "./Accessories/Accessories";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Iphone from "./Iphone/Iphone";
import Ipod from "./Ipod/Ipod";
import Macbook from "./Macbook/Macbook";
import Store from "./Store/Store";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          <Route path="/Iphone" element={<Iphone />}></Route>
          <Route path="/IPod" element={<Ipod />}></Route>
          <Route path="/Macbook" element={<Macbook />}></Route>
          <Route path="/Accesories" element={<Accessories />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
