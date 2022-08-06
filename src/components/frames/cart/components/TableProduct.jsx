import React from "react";
import { useSelector } from "react-redux";
import ComponentTable from "./ComponentTable";

function TableProduct() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <h5 className="text-center">Giỏ hàng của bạn trống</h5>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tên Đồ ăn</th>
              <th>Giá </th>
              <th>Số lượng</th>
              <th>Xoá khỏi giỏ hàng</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <ComponentTable items={item} key={item.id} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default TableProduct;
