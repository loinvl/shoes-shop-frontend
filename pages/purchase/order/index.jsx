import { PrimaryButton, SecondaryButton } from "@/components/StyledButton";
import PurchaseCard from "@/components/purchase/PurchaseCard";
import RateModal from "@/components/purchase/RateModal";
import styleColors from "@/styles/styleColors";
import { AllInbox, DeliveryDining, FactCheck, LocalShipping, Receipt } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Stack, Step, StepIcon, StepLabel, Stepper, Typography } from "@mui/material";

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
export default function Order() {
  return (
    <Container>
      <Stack mt={3} mb={5} px={{xs: 1, sm: 5}} gap={5}>
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
          <Box mt={3}>
            <Stepper activeStep={3} alternativeLabel>
              <Step>
                <StepLabel StepIconComponent={Receipt}>Đã Đặt</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={AllInbox}>Đã Gói Hàng</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={LocalShipping}>Đang Vận Chuyển</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={DeliveryDining}>Đang Giao</StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={FactCheck}>Đã Nhận Hàng</StepLabel>
              </Step>
            </Stepper>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Box>
            <Typography variant="h6" fontWeight="600">
              Thông Tin Đơn Hàng
            </Typography>
          </Box>
          <Box mt={3}>
            <PurchaseCard purchase={purchase}/>
          </Box>
        </Box>
        <Box display="flex" justifyContent="end" gap={5}>
          <RateModal/>
          <PrimaryButton size="large">Hủy Đơn</PrimaryButton>
        </Box>
      </Stack>
    </Container>
  );
}
