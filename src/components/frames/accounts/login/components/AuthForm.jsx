import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/firebase-Config";
import { AuthContext } from "../../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FormLogin from "./FormLogin";

function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authContex = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "required";
    } else if (values.password.length > 24 || values.password.length < 8) {
      errors.password = "password toi thieu 6 ky tu toi da 24 ky tu";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          setLoading(false);
          const { accessToken, email } = userCredential.user;
          authContex.login(accessToken, email);
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          setError(errorCode);
        });
    },
  });
  // useEffect(() => {
  //   if (error != null) {
  //     setTimeout(() => setLoading(false), 3000);
  //   }
  // }, [loading]);
  const closeHandler = () => {
    setLoading(false);
  };
  return (
    <>
      <FormLogin
        loading={loading}
        onSubmitHandler={formik.handleSubmit}
        onChangeHandler={formik.handleChange}
        values={formik.values}
        errors={formik.errors}
        onCloseHandler={closeHandler}
        errorLogin={error}
      />
    </>
  );
}

export default AuthForm;
