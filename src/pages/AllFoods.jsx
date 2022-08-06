import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import FoodPage from "../components/frames/foods/FoodPage";

const AllFoods = () => {
  return (
    <Helmet title="All-Foods">
      <FoodPage />
    </Helmet>
  );
};

export default AllFoods;
