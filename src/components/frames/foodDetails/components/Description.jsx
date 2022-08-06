import React, { useState } from "react";
import { Col } from "reactstrap";

function Description(props) {
  const [tab, setTab] = useState("desc");
  return (
    <Col lg="12">
      <div className="tabs d-flex align-items-center gap-5 py-3">
        <h6
          className={` ${tab === "desc" ? "tab__active" : ""}`}
          onClick={() => setTab("desc")}
        >
          Description
        </h6>
        <h6
          className={` ${tab === "rev" ? "tab__active" : ""}`}
          onClick={() => setTab("rev")}
        >
          Review
        </h6>
      </div>

      {tab === "desc" ? (
        <div className="tab__content">
          <p>{props.product.desc}</p>
        </div>
      ) : (
        <div className="tab__form mb-3">update</div>
      )}
    </Col>
  );
}

export default Description;
