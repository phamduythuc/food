import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import BillCheckout from "./components/BillCheckout";
import TableProduct from "./components/TableProduct";
import "../../../styles/cart-page.css";
function CartPage() {
  useEffect(() => window.scrollTo(0, 20));
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <TableProduct />
            <BillCheckout />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CartPage;
