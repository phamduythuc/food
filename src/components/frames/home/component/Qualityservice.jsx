import React from "react";
import { Container, Row, Col } from "reactstrap";
import featureImg01 from "../../../../assets/images/service-01.png";
import featureImg02 from "../../../../assets/images/service-02.png";
import featureImg03 from "../../../../assets/images/service-03.png";

const featureData = [
  {
    title: "Vận chuyển nhanh",
    imgUrl: featureImg01,
    desc: "Lộ trình vận chuyển sắp xếp một cách khoa học giảm bớt các quy trình phức tạp",
  },

  {
    title: "Bảo quản tốt",
    imgUrl: featureImg02,
    desc: "Đóng gói kiểm tra trước khi giao đến tay khách hàng luôn giữ được chất lượng tốt nhất ",
  },
  {
    title: "Nhận hàng dễ dàng",
    imgUrl: featureImg03,
    desc: "Và cuối cùng là thưởng thức đồ tuyệt vời của chúng tôi",
  },
];

function Qualityservice() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h5 className="feature__subtitle mb-4">Chúng tôi sẽ phục vụ bạn</h5>
            <h2 className="feature__title">Chỉ cần ngồi nhà đặt đồ</h2>
            <h2 className="feature__title">
              chúng tôi sẽ <span>giao tới</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Đồ ăn sẽ được đóng gói kĩ càng bảo quản tốt trước khi vận chuyển
              đến tay khách hàng
            </p>
            <p className="feature__text">
              Với nhiều năm phục vụ và đội ngũ làm việc tốt chúng tôi sẽ làm cho
              bạn hài lòng
            </p>
          </Col>

          {featureData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
              <div className="feature__item text-center px-5 py-3">
                <img
                  src={item.imgUrl}
                  alt="feature-img"
                  className="w-25 mb-3"
                />
                <h5 className=" fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Qualityservice;
