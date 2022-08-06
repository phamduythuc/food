import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ToltalFormat from "../../../UI/price/ToltalFormat";

function BillCheckout() {
  const totalAmount = useSelector((state) => state.cart.totalFormat);
  return (
    <>
      <div className="mt-4">
        <h6>
          Tổng: <span className="cart__subtotal">{<ToltalFormat />}</span>
        </h6>
        <p>Phí vẫn chuyển sẽ chỉ được miễn phí trong bán kính 5km</p>
        <div className="cart__page-btn">
          <button className="addTOCart__btn me-4">
            <Link to="/foods">Tiếp tục đặt hàng</Link>
          </button>
          <button className="addTOCart__btn">
            <Link to="/checkout">Thực hiện thanh toán</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default BillCheckout;
