import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

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
