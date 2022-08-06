import React from "react";
import { Container, Row, Col } from "reactstrap";
import networkImg from "../../../../assets/images/network.png";
import TestimonialSlider from "../../../UI/slider/TestimonialSlider";

function Testimonial() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="testimonial ">
              <h5 className="testimonial__subtitle mb-4">Lơi nhận xét</h5>
              <h2 className="testimonial__title mb-4">
                Những gì <span>Khách hàng </span> của chúng tôi đang nói
              </h2>

              <TestimonialSlider />
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={networkImg} alt="testimonial-img" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
