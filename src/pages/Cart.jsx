import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import CartPage from "../components/frames/cart/CartPage";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />

      <CartPage />
    </Helmet>
  );
};

export default Cart;
