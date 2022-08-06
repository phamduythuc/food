import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/shopping-cart/cartSlice";
import PriceFormat from "../../../UI/price/ToltalFormat";

function ComponentTable(props) {
  const { id, image01, title, price, quantity } = props.items;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price.toLocaleString("it-IT")} đ</td>
      <td className="text-center">{quantity}sp</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
}

export default ComponentTable;
