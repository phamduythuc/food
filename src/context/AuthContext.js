import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase-Config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext({
  accessToken: "",
  isLogin: false,
  email: "",
  login: () => {},
  logout: () => {},
});
const AuthProvider = (props) => {
  const initialStorage = localStorage.getItem("accessToken");
  const [accessToken, setAccessToken] = useState(initialStorage);
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const userLogin = !!accessToken;
  const loginHandler = (accessToken, mail) => {
    localStorage.setItem("accessToken", accessToken);
    setAccessToken(accessToken);
    setMail(mail);
  };

  const logoutHandler = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: accessToken,
        isLogin: userLogin,
        email: mail,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export { AuthContext };
