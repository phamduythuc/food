import React from "react";
import RegisterPage from "../components/frames/accounts/register/RegisterPage";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Register = () => {
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <RegisterPage />
    </Helmet>
  );
};

export default Register;
