import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/firebase-Config";
import RegisterForm from "./RegisterForm";
function AuthFormRegister() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [disError, setDisError] = useState(false);
  const firebaseCode = "auth/email-already-in-use";

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (!values.password) {
      errors.password = "required";
    } else if (values.password.length > 24 || values.password.length < 8) {
      errors.password = "password toi thieu 6 ky tu toi da 24 ky tu";
    } else if (values.password !== values.re_password) {
      errors.re_password = "not found";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      re_password: "",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.re_password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.email === formik.values.email) {
            setDisError(false);
            setRegister(true);
            setMail(user.email);
            setLoading(false);
            setTimeout(() => {
              setRegister(false);
              navigate("/login");
            }, 3000);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === firebaseCode) {
            setDisError(true);
            setLoading(false);
          }
        });
    },
  });
  const closeHandler = () => {
    setLoading(false);
  };
  return (
    <>
      <RegisterForm
        loading={loading}
        onSubmitHandler={formik.handleSubmit}
        onChangeHandler={formik.handleChange}
        register={register}
        values={formik.values}
        errors={formik.errors}
        mail={mail}
        displayError={disError}
        onCloseHandler={closeHandler}
      />
    </>
  );
}

export default AuthFormRegister;
