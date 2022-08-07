import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ToltalFormat(props) {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const totalFormat = cartTotalAmount.toLocaleString("it-IT");
  const [total, setTotal] = useState(totalFormat);
  useEffect(() => setTotal(totalFormat), [cartTotalAmount]);

  return <>{`${total.toLocaleString("it-IT")} đ`}</>;
}

export default ToltalFormat;
