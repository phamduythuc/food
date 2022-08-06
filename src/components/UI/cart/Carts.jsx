import React, { useContext, useState } from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { AuthContext } from "../../../context/AuthContext";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";
import DialogBox from "../box/DialogBox";
import ToltalFormat from "../price/ToltalFormat";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [data, setData] = useState(false);
  const authContext = useContext(AuthContext);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {!authContext.isLogin && (
            <h6 className="text-center mt-5">
              Đăng nhập để thực hiện chức năng
            </h6>
          )}
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">Giỏ hàng trống</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Tổng : <span>{authContext.isLogin ? <ToltalFormat /> : "0 đ"}</span>
          </h6>
          <button>
            <Link
              to={authContext.isLogin ? "/checkout" : "/login"}
              onClick={toggleCart}
            >
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
