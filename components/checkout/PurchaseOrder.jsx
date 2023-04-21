import styleColors from "@/styles/styleColors";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { FourthHeading, NormalHeading, ThirdHeading } from "../StyledTypography";
import convertUtil from "@/utils/convertUtil";

export default function PurchaseOrder({ orders }) {
  return (
    <Stack p={5} gap={3} sx={{ borderRadius: "0.5em", backgroundColor: styleColors.gray.light }}>
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
            sx={{ borderBottom: `1px solid ${styleColors.gray.medium}` }}
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
              <FourthHeading color={styleColors.secondary}>
                {convertUtil.toPriceString(order.shoes.unitPrice * order.quantity)}
              </FourthHeading>
            </Box>
          </Box>
        ))}
      </Stack>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Phí vận chuyển:</Typography>
        <FourthHeading color={styleColors.secondary}>
          0đ
        </FourthHeading>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Tổng tiền:</Typography>
        <ThirdHeading color={styleColors.secondary}>
          {convertUtil.toPriceString(orders.reduce((pre, cur) => pre + cur.shoes.unitPrice * cur.quantity, 0))}
        </ThirdHeading>
      </Box>
    </Stack>
  );
}
