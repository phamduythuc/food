import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import whyImg from "../../../../assets/images/location.png";

function BrandExperience() {
  return (
    <section className="why__choose-us">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="why__tasty-treat">
              <h2 className="tasty__treat-title mb-4">
                Tại sao là <span>Food House?</span>
              </h2>
              <p className="tasty__treat-desc">
                Luôn là sự đi đầu, luôn là sự đổi mới trong lĩnh vực của chúng
                tôi. Cũng với những đồng nghiệp nhân việc phục vụ tâm huyết, một
                lần nữa chúng tôi tin chắc mình sẽ biết phải làm gì để chiêu
                đãi, phục vụ khách hành yêu quý của mình
              </p>

              <ListGroup className="mt-4">
                <ListGroupItem className="border-0 ps-0">
                  <p className=" choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i> Thực phẩm tươi sạch
                  </p>
                  <p className="choose__us-desc">
                    Thực phẩm tươi chế biến đúng quy trình
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i> Chất lượng hỗ trợ
                  </p>
                  <p className="choose__us-desc">
                    Đội ngũ làm việc hết mình vì khách hàng
                  </p>
                </ListGroupItem>

                <ListGroupItem className="border-0 ps-0">
                  <p className="choose__us-title d-flex align-items-center gap-2 ">
                    <i class="ri-checkbox-circle-line"></i>Đặt hàng ở bất kì đâu
                  </p>
                  <p className="choose__us-desc">
                    Vận chuyển cứ để chúng tôi bạn chỉ cần đặt hàng
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BrandExperience;
