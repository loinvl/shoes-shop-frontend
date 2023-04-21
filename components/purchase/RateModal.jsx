import { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import { Box, Grid, IconButton, Rating } from "@mui/material";
import { PrimaryInput } from "../StyledTextField";
import { StyledImage } from "../StyledImage";
import defaultValues from "@/utils/defaultValues";
import { AddAPhoto, Cancel, DeleteForever, HighlightOff } from "@mui/icons-material";
import styleColors from "@/styles/styleColors";

export default function RateModal({ disabled, order, handleDataRate }) {
  const [star, setStar] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // preview image before upload
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setImageFile(event.target.files[0]);
    }
  };

  // handle rate
  const handleRate = async () => {
    // send data to parent component
    handleDataRate(order.purchaseOrderID, order.shoesID, star, feedback, imageFile);

    // after send data
    setOpen(false);
  };

  return (
    <div>
      <PrimaryButton disabled={disabled} onClick={handleClickOpen}>
        Đánh Giá
      </PrimaryButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Đánh Giá Sản Phẩm</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Rating
                name="simple-controlled"
                value={star}
                onChange={(event, newValue) => {
                  setStar(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={8}>
                  <PrimaryInput
                    label="Nội dung"
                    value={feedback}
                    fullWidth
                    multiline
                    rows={6}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box px={{ xs: "10%", sm: 0 }}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1/1",
                        position: "relative",
                      }}
                    >
                      <StyledImage
                        src={imageUrl || defaultValues.imageDefaultLink}
                        alt="rate"
                        width="100%"
                        height="100%"
                      />
                      {imageUrl ? (
                        <IconButton
                          sx={{ position: "absolute", top: "0", right: "0" }}
                          onClick={(e) => {
                            setImageUrl(null);
                            setImageFile(null);
                          }}
                        >
                          <Cancel sx={{ color: styleColors.black }} />
                        </IconButton>
                      ) : (
                        <PrimaryButton
                          startIcon={<AddAPhoto />}
                          size="small"
                          sx={{ position: "absolute", left: "50%", bottom: "10%", transform: "translateX(-50%)" }}
                          onClick={(e) => {
                            inputRef.current.click();
                          }}
                        >
                          Thêm
                          <input hidden accept="image/*" type="file" onChange={onImageChange} ref={inputRef} />
                        </PrimaryButton>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={handleClose}>Hủy</SecondaryButton>
          <PrimaryButton onClick={handleRate}>Đánh Giá</PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
