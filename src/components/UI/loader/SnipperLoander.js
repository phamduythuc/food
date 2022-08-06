import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Stack from "@mui/material/Stack";

function SnipperLoander(props) {
  return (
    <div>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.open}
          onClick={props.handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Stack>
    </div>
  );
}

export default SnipperLoander;
