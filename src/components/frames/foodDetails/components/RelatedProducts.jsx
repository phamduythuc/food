import React from "react";
import products from "../../../../assets/fake-data/products";
import { Col } from "reactstrap";
import ProductCard from "../../../UI/product-card/ProductCard";
function RelatedProducts(props) {
  const relatedProduct = products.filter(
    (item) => props.product.category === item.category
  );

  return (
    <>
      <Col lg="12" className="mb-5 mt-4">
        <h2 className="related__Product-title">Có thể bạn cũng thích</h2>
      </Col>

      {relatedProduct.map((item) => (
        <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
          <ProductCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default RelatedProducts;
