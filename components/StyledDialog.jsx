import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PrimaryButton, SecondaryButton } from "./StyledButton";

const ConfirmDialog = ({ openButton, title, content, cancleLabel, okLabel, open, onCancle, onOk }) => {
  return (
    <div>
      {openButton}
      <Dialog
        open={open}
        onClose={onCancle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={onCancle}>{cancleLabel}</SecondaryButton>
          <PrimaryButton onClick={onOk}>{okLabel}</PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const AlertDialog = ({ title, content, open, onClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <PrimaryButton onClick={onClose}>Đóng</PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { ConfirmDialog, AlertDialog };
