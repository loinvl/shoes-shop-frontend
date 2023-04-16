import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import { Box, Grid, Rating } from "@mui/material";
import StarAmount from "../StarAmount";
import { PrimaryInput } from "../StyledTextField";
import { StyledImage } from "../layouts/StyledImage";

export default function RateModal({disabled}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(5);

  return (
    <div>
      <SecondaryButton disabled={disabled} size="large" onClick={handleClickOpen}>
        Đánh Giá
      </SecondaryButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Đánh Giá Sản Phẩm</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Grid item>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Grid>
              <Grid item mt={1}>
                <PrimaryInput autoFocus id="content" label="Nội dung" fullWidth multiline rows={5} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} justifyContent="center" alignItems="center">
              <Box sx={{ width: "100%", height: "auto", aspectRatio: "1/1" }}>
                <StyledImage src="/image/shoes-sample1.webp" alt="rate" width="100%" height="100%" />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={handleClose}>Hủy</SecondaryButton>
          <PrimaryButton onClick={handleClose}>Đánh Giá</PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
