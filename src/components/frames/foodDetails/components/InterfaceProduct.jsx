import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import DialogBox from "../../../UI/box/DialogBox";
import freeShipping from "../../../../assets/images/free-shipping.png";
import boxShip from "../../../../assets/images/box-ship.png";

function InterfaceProduct(props) {
  const [previewImg, setPreviewImg] = useState(props.product.image01);
  useEffect(() => {
    setPreviewImg(props.product.image01);
  }, [props.product]);
  useEffect(() => {
    window.scrollTo(0, 100);
  }, [props.product]);
  return (
    <>
      <Col lg="2" md="2">
        <div className="product__images ">
          <div
            className="img__item mb-3"
            onClick={() => setPreviewImg(props.product.image01)}
          >
            <img src={props.product.image01} alt="" className="w-50" />
          </div>
          <div
            className="img__item mb-3"
            onClick={() => setPreviewImg(props.product.image02)}
          >
            <img src={props.product.image02} alt="" className="w-50" />
          </div>

          <div
            className="img__item"
            onClick={() => setPreviewImg(props.product.image03)}
          >
            <img src={props.product.image03} alt="" className="w-50" />
          </div>
        </div>
      </Col>

      <Col lg="4" md="4">
        <div className="product__main-img">
          <img src={previewImg} alt="" className="w-100" />
        </div>
      </Col>

      <Col lg="6" md="6">
        <div className="single__product-content mb-5">
          <h2 className="product__title mb-3">{props.product.title}</h2>
          <p className="product__price">
            {" "}
            Price: <span>{props.product.price.toLocaleString("it-IT")} đ</span>
          </p>
          <p className="category mb-5">
            Thể loại: <span>{props.product.category}</span>
          </p>
          <DialogBox
            btnName="add to cart"
            display={true}
            onAddToCart={props.onAddItem}
          />
        </div>
        <div className="single__product-content">
          <div className="signle-ship  d-flex align-items-center gap-3">
            <img src={freeShipping} alt="freeShipping" />
            <span>Miễn phí ship cho đơn hàng này</span>
          </div>
          <div className="signle-ship d-flex align-items-center gap-3">
            <img src={boxShip} alt="boxShip" />
            <span>Hàng được đóng gói bảo quản cận thận</span>
          </div>
        </div>
      </Col>
    </>
  );
}
export default InterfaceProduct;
