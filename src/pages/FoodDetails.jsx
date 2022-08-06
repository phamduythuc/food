import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import FoodDetailsPage from "../components/frames/foodDetails/FoodDetailsPage";

const FoodDetails = () => {
  // const product = products.find((product) => product.id === id);

  return (
    <Helmet title="Product-details">
      <CommonSection title="details" />

      <section>
        <FoodDetailsPage />
      </section>
    </Helmet>
  );
};

export default FoodDetails;
