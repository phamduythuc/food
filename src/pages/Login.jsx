import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import LoginPage from "../components/frames/accounts/login/LoginPage";
import "../styles/check-error.css";
const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <LoginPage />
    </Helmet>
  );
};

export default Login;
