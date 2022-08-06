import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../../../../assets/fake-data/products.js";
import ProductCard from "../../../UI/product-card/ProductCard";
import foodCategoryImg01 from "../../../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../../../assets/images/pizza.png";
import foodCategoryImg03 from "../../../../assets/images/bread.png";

function DisplayProduct() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    } else if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    } else if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Đồ ăn phổ biến</h2>
          </Col>

          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button
                className={`all__btn  ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("ALL")}
              >
                Tất cả
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BURGER" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("BURGER")}
              >
                <img src={foodCategoryImg01} alt="" />
                Burger
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "PIZZA" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("PIZZA")}
              >
                <img src={foodCategoryImg02} alt="" />
                Pizza
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "BREAD" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("BREAD")}
              >
                <img src={foodCategoryImg03} alt="" />
                Bánh mì
              </button>
            </div>
          </Col>

          {allProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default DisplayProduct;
