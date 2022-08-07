import React, { useEffect } from "react";
import AuthForm from "./components/AuthForm";
import "../../../../styles/product-details.css";
function LoginPage() {
  useEffect(() => window.scrollTo(0, 45));
  return (
    <>
      <AuthForm />
    </>
  );
}

export default LoginPage;
