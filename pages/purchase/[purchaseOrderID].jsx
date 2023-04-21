import purchaseAPI from "@/api/purchaseAPI";
import { PrimaryButton, SecondaryButton } from "@/components/StyledButton";
import { ConfirmDialog } from "@/components/StyledDialog";
import { FourthHeading, ThirdHeading } from "@/components/StyledTypography";
import IsLogin from "@/components/hoc/IsLogin";
import PurchaseCard from "@/components/purchase/PurchaseCard";
import RateModal from "@/components/purchase/RateModal";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import statusUtil from "@/utils/statusUtil";
import {
  AllInbox,
  Assessment,
  AssignmentReturn,
  Backspace,
  DeliveryDining,
  FactCheck,
  LocalShipping,
  Receipt,
} from "@mui/icons-material";
import { Box, Container, Divider, Grid, Stack, Step, StepIcon, StepLabel, Stepper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/*
const purchase = {
  customerName: "Nguyen Van A",
  phone: "+84000000000",
  email: "nguyenvana@example.com",
  address: "Số 76, đường Đào Trinh Nhất, An Bình, Dĩ An, Bình Dương",
  note: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  orderTime: "00:00 01/01/2023",
  orderStatus: 4,
  orderDetail: [
    {
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      quantity: 5,
      color: "Xanh",
      size: 38,
      unitPrice: 500000,
      imageLink: "/image/shoes-sample1.webp",
    },
    {
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      quantity: 5,
      color: "Xanh",
      size: 38,
      unitPrice: 500000,
      imageLink: "/image/shoes-sample1.webp",
      orderStatus: "Đang giao",
      orderTime: "00:00 01/01/2023",
    },
  ],
};
*/

const ReceiptCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <Receipt sx={{ color: color }} />;
};
const AllInboxCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <AllInbox sx={{ color: color }} />;
};
const LocalShippingCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <LocalShipping sx={{ color: color }} />;
};
const DeliveryDiningCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <DeliveryDining sx={{ color: color }} />;
};
const FactCheckCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <FactCheck sx={{ color: color }} />;
};

const BackspaceCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : styleColors.gray.dark;

  return <Backspace sx={{ color: color }} />;
};

export default function Order() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [purchase, setPurchase] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  //
  useEffect(() => {
    (async () => {
      // check router
      if(!router.isReady){return;}
      
      // call api to get purchase order by id
      const { purchaseOrderID } = router.query;
      const res = await purchaseAPI.getPurchaseByID(purchaseOrderID);

      // handle error res
      if (!res.success) {
        return;
      }

      // handle success res
      console.log(res.data.purchaseOrder);
      setPurchase(res.data.purchaseOrder);
    })();
  }, [router]);

  // handle cancel order when order does not transit
  const handleCancelOrder = async (purchaseOrderID) => {
    // call api
    const res = await purchaseAPI.cancelPurchase(purchaseOrderID);

    // handle error res
    if (!res.success) {
      dispatch(showErrorMessage("Hủy đơn hàng thất bại, hãy thử lại"));
      return;
    }

    // handle success res
    console.log(res.data.cancelPurchase);
    setOpenConfirm(false);
    dispatch(showMessage("Hủy đơn hàng thành công"));
    window.scrollTo(0, 0);
    setPurchase(res.data.cancelPurchase);
  };

  return (
    purchase && (
      <IsLogin>
        <Container>
          <Box>
            <ThirdHeading textAlign="center">CHI TIẾT ĐƠN HÀNG</ThirdHeading>
          </Box>
          <Stack mt={3} mb={5} px={{ xs: 1, sm: 5 }} gap={5}>
            <Box>
              <Box>
                <FourthHeading>Thông Tin Người Nhận</FourthHeading>
              </Box>
              <Box mt={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>Tên người nhận: {purchase.customerName}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Số điện thoại: {purchase.phone}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Email: {purchase.email}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Địa chỉ: {purchase.address}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Ghi chú: {purchase.note}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Box>
                <FourthHeading>Thông Tin Vận Chuyển</FourthHeading>
              </Box>
              {purchase.orderStatus != 5 ? (
                <Box mt={3}>
                  <Stepper activeStep={purchase.orderStatus} alternativeLabel>
                    <Step>
                      <StepLabel StepIconComponent={ReceiptCustom}>{statusUtil.purchaseStatus[0]}</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel StepIconComponent={AllInboxCustom}>{statusUtil.purchaseStatus[1]}</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel StepIconComponent={LocalShippingCustom}>{statusUtil.purchaseStatus[2]}</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel StepIconComponent={DeliveryDiningCustom}>{statusUtil.purchaseStatus[3]}</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel StepIconComponent={FactCheckCustom}>{statusUtil.purchaseStatus[4]}</StepLabel>
                    </Step>
                  </Stepper>
                </Box>
              ) : (
                <Box mt={3}>
                  <Stepper activeStep={purchase.orderStatus} alternativeLabel>
                    <Step>
                      <StepLabel StepIconComponent={ReceiptCustom}>{statusUtil.purchaseStatus[0]}</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel StepIconComponent={BackspaceCustom}>{statusUtil.purchaseStatus[5]}</StepLabel>
                    </Step>
                  </Stepper>
                </Box>
              )}
            </Box>
            <Divider />
            <Box>
              <Box>
                <FourthHeading>Thông Tin Đơn Hàng</FourthHeading>
              </Box>
              <Box mt={3}>
                <PurchaseCard purchase={purchase} rate={purchase.orderStatus == 4} />
              </Box>
            </Box>
            {purchase.orderStatus < 2 && (
              <Box display="flex" justifyContent="end">
                <ConfirmDialog
                  openButton={
                    <PrimaryButton size="large" onClick={(e) => setOpenConfirm(true)}>
                      Hủy Đơn
                    </PrimaryButton>
                  }
                  open={openConfirm}
                  title="Hủy Đơn Hàng"
                  content="Bạn muốn hủy đơn hàng này? Hãy xem xét thật kỹ nhé."
                  cancelLabel="Thoát"
                  onCancel={(e) => setOpenConfirm(false)}
                  okLabel="Hủy Đơn"
                  onOk={(e) => handleCancelOrder(purchase.purchaseOrderID)}
                />
              </Box>
            )}
          </Stack>
        </Container>
      </IsLogin>
    )
  );
}
