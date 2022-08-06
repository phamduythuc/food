import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DialogBox(props) {
  const [open, setOpen] = useState(false);
  const { isLogin } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleClickOpen = () => {
    if (isLogin) {
      props.onAddToCart();
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigationLogin = () => {
    navigation("/login");
  };
  return (
    <div>
      {props.display && (
        <Button
          variant="contained"
          style={{ backgroundColor: "#fb923c", padding: "2px 6px" }}
          onClick={handleClickOpen}
        >
          {props.btnName}
        </Button>
      )}
      {
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Để thực hiện các chức năng bạn cần phải đăng nhập!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              thực hiện đăng nhập với tài khoản google hoặc đăng ký tài khoản
              mới
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Đóng
            </Button>
            <Button onClick={navigationLogin}>Đăng Nhập</Button>
          </DialogActions>
        </Dialog>
      }
    </div>
  );
}

export default DialogBox;
