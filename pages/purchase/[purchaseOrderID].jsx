import purchaseAPI from "@/api/purchaseAPI";
import { PrimaryButton, SecondaryButton } from "@/components/StyledButton";
import { ConfirmDialog } from "@/components/StyledDialog";
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
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

  return <Receipt sx={{ color: color }} />;
};
const AllInboxCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

  return <AllInbox sx={{ color: color }} />;
};
const LocalShippingCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

  return <LocalShipping sx={{ color: color }} />;
};
const DeliveryDiningCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

  return <DeliveryDining sx={{ color: color }} />;
};
const FactCheckCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

  return <FactCheck sx={{ color: color }} />;
};

const BackspaceCustom = (props) => {
  const { active, completed } = props;
  const color = active ? styleColors.blue : completed ? styleColors.blue : "disabled";

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
  const handleCancleOrder = async (purchaseOrderID) => {
    // call api
    const res = await purchaseAPI.canclePurchase(purchaseOrderID);

    // handle error res
    if (!res.success) {
      dispatch(showErrorMessage("Hủy đơn hàng thất bại, hãy thử lại"));
      return;
    }

    // handle success res
    console.log(res.data.canclePurchase);
    setOpenConfirm(false);
    dispatch(showMessage("Hủy đơn hàng thành công"));
    window.scrollTo(0, 0);
    setPurchase(res.data.canclePurchase);
  };

  return (
    purchase && (
      <Container>
        <Stack mb={5} px={{ xs: 1, sm: 5 }} gap={5}>
          <Box>
            <Typography variant="h4" fontWeight="600" textAlign="center">
              CHI TIẾT ĐƠN HÀNG
            </Typography>
          </Box>
          <Box>
            <Box>
              <Typography variant="h6" fontWeight="600">
                Thông Tin Người Nhận
              </Typography>
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
              <Typography variant="h6" fontWeight="600">
                Thông Tin Vận Chuyển
              </Typography>
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
              <Typography variant="h6" fontWeight="600">
                Thông Tin Đơn Hàng
              </Typography>
            </Box>
            <Box mt={3}>
              <PurchaseCard purchase={purchase} />
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" gap={3}>
            <RateModal disabled={purchase.orderStatus != 4} />
            {/* <PrimaryButton
              size="large"
              disabled={purchase.orderStatus >= 2}
              onClick={(e) => handleCancleOrder(purchase.purchaseOrderID)}
            >
              Hủy Đơn
            </PrimaryButton> */}
            <ConfirmDialog
              openButton={
                <PrimaryButton size="large" disabled={purchase.orderStatus >= 2} onClick={(e) => setOpenConfirm(true)}>
                  Hủy Đơn
                </PrimaryButton>
              }
              open={openConfirm}
              title="Hủy Đơn Hàng"
              content="Bạn muốn hủy đơn hàng này? Hãy xem xét thật kỹ nhé."
              cancleLabel="Thoát"
              onCancle={(e) => setOpenConfirm(false)}
              okLabel="Hủy Đơn"
              onOk={(e) => handleCancleOrder(purchase.purchaseOrderID)}
            />
          </Box>
        </Stack>
      </Container>
    )
  );
}
