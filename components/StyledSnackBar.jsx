import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { showMessage } from "@/redux/messageReducer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageSnackBar = (props) => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    dispatch(showMessage(null));
  };
  
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={props.type || "success"} sx={{ width: "100%" }}>
        {props.children}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackBar;
