import { PrimaryButton } from "@/components/StyledButton";
import { AlertDialog, ConfirmDialog } from "@/components/StyledDialog";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  const handleCancle = () => {
    setOpen(false);
  };

  const handleOk = () => {
    console.log("do somgthing");
    setOpen(false);
  };

  const handleClose = () => {
    setOpenAlert(false);
  }
  return (
    <>
    <Container>
      <ConfirmDialog
        openButton={
          <PrimaryButton size="large" onClick={handleClick}>
            open
          </PrimaryButton>
        }
        title="test con firm dialog"
        content="this is content"
        cancleLabel="huy"
        onCancle={handleCancle}
        okLabel="ok"
        onOk={handleOk}
        open={open}
        />
    </Container>

    <AlertDialog open={openAlert} title="thong bao" content="this is content" onClose={handleClose}/>
  </>
  );
}
