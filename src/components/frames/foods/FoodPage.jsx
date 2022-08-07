import React, { useEffect } from "react";
import FoodAisa from "./components/FoodAisa";
import "../../../styles/all-foods.css";
function FoodPage() {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      <FoodAisa />
    </>
  );
}

export default FoodPage;
