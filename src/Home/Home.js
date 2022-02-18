import React from "react";
import BottomDetails from "../BottomDetails/BottomDetails";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import Slider from "../Slider/Slider";
import BestSeller from "../BestSeller/BestSeller";

function Home() {
  return (
    <div>
      <Slider />
      <BestSeller />
      <BottomDetails />
      <FeatureProducts />
    </div>
  );
}

export default Home;
