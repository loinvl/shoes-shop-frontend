import styleColors from "@/styles/styleColors";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { FourthHeading } from "../StyledTypography";
import convertUtil from "@/utils/convertUtil";

export default function PurchaseOrder({ orders }) {
  return (
    <Stack p={5} gap={3} sx={{ borderRadius: "1em", backgroundColor: styleColors.cloudyGray }}>
      <Box display="flex" justifyContent="space-between">
        <FourthHeading>Sản phẩm</FourthHeading>
        <FourthHeading>Thành tiền</FourthHeading>
      </Box>
      <Divider />
      <Stack gap={2}>
        {orders.map((order, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="end"
            gap={3}
            sx={{ borderBottom: `1px solid ${styleColors.metalGray}` }}
          >
            <Box flex={3}>
              <Typography>{order.shoesModel.shoesModelName}</Typography>
              <Typography>Màu sắc: {order.shoes.color}</Typography>
              <Typography>Kích thước: {order.shoes.size}</Typography>
              <Typography>
                Đơn giá x Số lượng: {convertUtil.toPriceString(order.shoes.unitPrice)}x{order.quantity}
              </Typography>
            </Box>
            <Box flex={1} textAlign="right">
              <Typography variant="h6" fontWeight="600">
                {convertUtil.toPriceString(order.shoes.unitPrice * order.quantity)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Phí vận chuyển:</Typography>
        <Typography variant="h6" fontWeight="600">
          0đ
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Tổng tiền:</Typography>
        <Typography variant="h5" fontWeight="600">
          {convertUtil.toPriceString(orders.reduce((pre, cur) => pre + cur.shoes.unitPrice * cur.quantity, 0))}
        </Typography>
      </Box>
    </Stack>
  );
}
