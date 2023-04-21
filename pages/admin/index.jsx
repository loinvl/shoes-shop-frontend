import purchaseAPI from "@/api/purchaseAPI";
import { SelectButton } from "@/components/StyledButton";
import { PrimaryButton } from "@/components/StyledButton";
import { ConfirmDialog, CustomDialog } from "@/components/StyledDialog";
import IsAdmin from "@/components/hoc/IsAdmin";
import AdminLayout from "@/components/layouts/AdminLayout";
import PurchaseCard from "@/components/purchase/PurchaseCard";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import defaultValues from "@/utils/defaultValues";
import statusUtil from "@/utils/statusUtil";
import { East } from "@mui/icons-material";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function PurchaseManagementPage() {
  const [purchaseList, setPurchaseList] = useState([]);
  const dispatch = useDispatch();
  const [customDialogIndex, setCustomDialogIndex] = useState(null);
  const [status, setStatus] = useState(null);

  // handle update purchase status
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdate = async (index) => {
    if(status == null){
      return;
    }
    
    // call api to update status
    console.log(purchaseList[index].purchaseOrderID, status);
    const res = await purchaseAPI.updatePurchaseStatus(purchaseList[index].purchaseOrderID, status);

    // handle error res
    if(!res.success){
      dispatch(showErrorMessage("Lỗi khi cập nhật, hãy thử lại"));
      return;
    }

    // handle success res
    dispatch(showMessage("Cập nhật thành công"));
    const newPurchaseList = [...purchaseList];
    newPurchaseList[index].orderStatus = status;
    setPurchaseList(newPurchaseList);
    setCustomDialogIndex(null);
    setStatus(null);
  };

  // get list purchase
  useEffect(() => {
    (async () => {
      const res = await purchaseAPI.getPurchaseListAdmin();

      // handle error res
      if (!res.success) {
        dispatch(showErrorMessage("Lỗi khi tải dữ liệu, hảy thử lại"));
        return;
      }

      // handle success res
      console.log(res.data.purchaseOrderList);
      setPurchaseList(res.data.purchaseOrderList);
    })();
  }, []);

  return (
    <Stack spacing={1}>
      {purchaseList.map((purchase, index) => (
        <Box>
          <Box key={index} p={1} border={`1px solid ${styleColors.gray.medium}`} borderRadius="0.5em">
            <PurchaseCard purchase={purchase} />
          </Box>
          <Stack alignItems="end">
            <CustomDialog
              title="Cập Nhật Trạng Thái Đơn Hàng"
              open={index == customDialogIndex}
              openButton={
                <PrimaryButton fullWidth onClick={(e) => setCustomDialogIndex(index)}>
                  Cập Nhật
                </PrimaryButton>
              }
              cancelLabel="Hủy"
              onCancel={(e) => {setCustomDialogIndex(null); setStatus(null)}}
              okLabel="Xác Nhận"
              onOk={(e) => handleUpdate(index)}
            >
              <Grid container p={3} spacing={3} alignItems="center">
                <Grid item xs={5}>
                  <SelectButton fullWidth selected={true}>
                    {statusUtil.purchaseStatus[purchase.orderStatus]}
                  </SelectButton>
                </Grid>
                <Grid item xs={2}>
                  <Stack justifyContent="center" alignItems="center">
                    <East sx={{ fontSize: "3em" }} />
                  </Stack>
                </Grid>
                <Grid item xs={5}>
                  <FormControl fullWidth>
                    <InputLabel id="status">Chọn Trạng Thái</InputLabel>
                    <Select labelId="status" value={status == null ? "" : status} label="Chọn Trạng Thái" onChange={handleChangeStatus}>
                      {statusUtil.purchaseStatus.map(
                        (statusText, i) =>
                          i != purchase.orderStatus && (
                            <MenuItem key={i} value={i}>
                              <SelectButton fullWidth selected={i == status}>{statusText}</SelectButton>
                            </MenuItem>
                          )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CustomDialog>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

PurchaseManagementPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
