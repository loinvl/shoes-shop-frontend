import { PrimaryButton } from "@/components/StyledButton";
import { ConfirmDialog } from "@/components/StyledDialog";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);
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
  return (
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
  );
}
