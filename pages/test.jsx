import { ConfirmDialog } from "@/components/StyledDialog";
import MessageSnackBar from "@/components/StyledSnackBar";
import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";

export default function test() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleOnOk = () => {
    console.log('fsdfs');
    setOpenConfirm(false);
  }

  const handleOnCancle= () => {
    console.log('thoat');
    setOpenConfirm(false);
  }

  return (
    <ConfirmDialog
      open={openConfirm}
      openButton={
        <IconButton
         onClick={(e) => setOpenConfirm(true)}>
          <Delete />
        </IconButton>
      }
      title="Xóa Khỏi Giỏ Hàng"
      content="Bạn muốn xóa đôi giày này khỏi giỏ hàng?"
      cancleLabel="Hủy"
      onCancle={handleOnCancle}
      okLabel="Đồng ý"
      onOk={handleOnOk}
    ></ConfirmDialog>
  );
}
