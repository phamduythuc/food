import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./CheckLogin.css";
function CheckLogin(props) {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/login");
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={5}>
      <div className="box-alert">
        <Alert severity="warning">
          Chức năng này cần phải <strong>Đăng nhập</strong>
        </Alert>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#fb923c",
            borderRadius: "10px",
            marginTop: "25px",
          }}
          onClick={navigationHandler}
        >
          Login
        </Button>
      </div>
    </Stack>
  );
}

export default CheckLogin;
