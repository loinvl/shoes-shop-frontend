import styleColors from "@/styles/styleColors";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function PurchaseOrder({ orders }) {
  return (
    <Stack p={5} gap={3} sx={{ borderRadius: "1em", backgroundColor: styleColors.cloudyGray }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" fontWeight="600">Sản phẩm</Typography>
        <Typography variant="h6" fontWeight="600">Thành tiền</Typography>
      </Box>
      <Divider />
      <Stack gap={2}>
        {orders.map((order, index) => (
          <Box key={index} display="flex" justifyContent="space-between" alignItems="end" gap={3} sx={{borderBottom: `1px solid ${styleColors.metalGray}`}}>
            <Box flex={3}>
              <Typography>{order.shoesModelName}</Typography>
              <Typography>Màu sắc: {order.color}</Typography>
              <Typography>Kích thước: {order.size}</Typography>
              <Typography>Đơn giá x Số lượng: {order.unitPrice}x{order.quantity}</Typography>
            </Box>
            <Box flex={1} textAlign="right">
              <Typography variant="h6" fontWeight="600">
                {order.unitPrice * order.quantity}đ
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Phí vận chuyển:</Typography>
        <Typography variant="h6" fontWeight="600">
          30000đ
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Tổng cộng:</Typography>
        <Typography variant="h5" fontWeight="600">
          1000000đ
        </Typography>
      </Box>
    </Stack>
  );
}
