import React from "react";
import { Container, Row, Col } from "reactstrap";
import SnipperLoander from "../../../../UI/loader/SnipperLoander";
import { Link } from "react-router-dom";
import { AlertTitle, Alert } from "@mui/material";

function FormLogin(props) {
  return (
    <section>
      {props.loading && (
        <SnipperLoander
          open={props.loading}
          handleClose={props.onClosehandle}
        />
      )}
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5" onSubmit={props.onSubmitHandler}>
              {props.errorLogin != null ? (
                <Alert severity="error" style={{ marginBottom: "20px" }}>
                  <AlertTitle>Error</AlertTitle>
                  {props.errorLogin}
                </Alert>
              ) : null}
              <div className="form__group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={props.onChangeHandler}
                  value={props.values.email}
                />
                {props.errors.email ? (
                  <div className="error">{props.errors.email}</div>
                ) : null}
              </div>
              <div className="form__group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={props.onChangeHandler}
                  value={props.values.password}
                />
                {props.errors.password ? (
                  <div className="error">{props.errors.password}</div>
                ) : null}
              </div>

              <button type="submit" className="addTOCart__btn">
                Login
              </button>
            </form>
            <Link to="/register">Don't have an account? Create an account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FormLogin;
