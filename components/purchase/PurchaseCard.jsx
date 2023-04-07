import { StyledImage } from "@/components/layouts/StyledImage";
import styleColors from "@/styles/styleColors";
import { Box, Typography } from "@mui/material";

export default function PurchaseCard({ purchase }) {
  return (
    <Box>
      <Box>
        {purchase.orderDetail.map((item, index) => (
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="end"
            gap={{ sm: 1, md: 3 }}
            p={{ xs: 1, md: 3 }}
            key={index}
            sx={{ border: `1px solid ${styleColors.cloudyGray}` }}
          >
            <Box display="flex" alignItems="center" gap={{ sm: 1, md: 3 }}>
              <Box>
                <StyledImage src={item.imageLink} alt="shoes model" width="80px" height="80px" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: {sm: "1.2em" } }} fontWeight="400" textAlign="justify">
                  {item.shoesModelName}
                </Typography>
                <Typography>Màu sắc: {item.color}</Typography>
                <Typography>Kích thước: {item.size}</Typography>
                <Typography>
                  Đơn giá x Số lượng: {item.unitPrice}x{item.quantity}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography fontWeight="600">{item.unitPrice * item.quantity}đ</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        mt={3}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography>Ngày đặt hàng: {purchase.orderTime}</Typography>
          <Typography>Trạng thái đơn hàng: {purchase.orderStatus}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="600">
            Tổng cộng: 1000000đ
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
