import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../../../../assets/fake-data/products.js";
import ProductCard from "../../../UI/product-card/ProductCard";

function ProductHot() {
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5 ">
            <h2>Hot Pizza</h2>
          </Col>

          {hotPizza.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductHot;
