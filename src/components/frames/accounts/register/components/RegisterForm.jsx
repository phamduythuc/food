import React from "react";
import SnipperLoander from "../../../../UI/loader/SnipperLoander";
import { Container, Row, Col } from "reactstrap";
import { AlertTitle, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm(props) {
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
              {props.register && (
                <Alert severity="success" style={{ marginBottom: "20px" }}>
                  <AlertTitle>Success</AlertTitle>
                  Đăng ký thành công với tài khoản email{" "}
                  <strong>{props.mail}</strong>
                </Alert>
              )}
              {props.displayError && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Tài khoản <strong>{props.mail}</strong> có thể đã tồn tại
                </Alert>
              )}
              <div className="form__group">
                <input
                  id="email"
                  name="email"
                  type="email"
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
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={props.onChangeHandler}
                  value={props.values.password}
                />
                {props.errors.password ? (
                  <div className="error">{props.errors.password}</div>
                ) : null}
              </div>
              <div className="form__group">
                <input
                  id="re_password"
                  name="re_password"
                  type="password"
                  placeholder="re-password"
                  required
                  onChange={props.onChangeHandler}
                  value={props.values.re_password}
                />
                {props.errors.re_password ? (
                  <div className="error">{props.errors.re_password}</div>
                ) : null}
              </div>
              <button type="submit" className="addTOCart__btn">
                Sign Up
              </button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RegisterForm;
