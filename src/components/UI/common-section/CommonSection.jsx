import React, { useContext } from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";
import { AuthContext } from "../../../context/AuthContext";

const CommonSection = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white mb-3">{props.title}</h2>
        <h3 className="text-white mb-3">
          Welcome to <strong>Now Food</strong>
        </h3>
        {authContext.email !== "" ? (
          <p className="text-white text-common d-flex item-center justify-content-center gap-3">
            <i class="ri-account-circle-fill"></i>
            <span>{authContext.email}</span>
          </p>
        ) : (
          ""
        )}
      </Container>
    </section>
  );
};

export default CommonSection;
