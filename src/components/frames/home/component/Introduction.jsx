import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import burger from "../../../../assets/images/burger.png";

function Introduction() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Đặt hàng dễ dàng chỉ vài thao tác</h5>
                <h1 className="mb-4 hero__title">
                  <span>Đói bụng</span> đợi chút <br /> đồ ăn
                  <span> đến ngay</span>
                </h1>

                <p className="hero-text">
                  Đặt thực đơn những món đồ ăn đa dạng, tạo ra buổi tiệc nhỏ
                  cùng gia đình, bạn bè và đồng nghiệp
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Đặt hàng ngay <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Xem tất cả đồ ăn</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Miễn phí ship 5km
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% thanh toán an toàn
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={burger} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Introduction;
