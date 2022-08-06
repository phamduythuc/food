import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import products from "../../../assets/fake-data/products";
import { Container, Row } from "reactstrap";
import InterfaceProduct from "./components/InterfaceProduct";
import RelatedProducts from "./components/RelatedProducts";
import Description from "./components/Description";

function FoodDetailsPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const { title, price, image01 } = product;

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  return (
    <section>
      <Container>
        <Row>
          <InterfaceProduct product={product} onAddItem={addItem} />
          <Description product={product} />
          <RelatedProducts product={product} />
        </Row>
      </Container>
    </section>
  );
}

export default FoodDetailsPage;
