import { Box, Divider } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import Rate from "./Rate";
import styleColors from "@/styles/styleColors";

export default function () {
  const rate = {
    name: "Khách Hàng",
    avatar: "/image/shoes5.webp",
    content: `Cửa hàng rất tốt, sản phẩm chất lượng, mua sắm ở đây không lo về giá cả, chỉ lo không có tiền. Mình sẽ ủng hộ shop nhiều hơn nữa!`,
  };

  return (
    <Box py={10} px={{ xs: 2, sm: 5, md: 10 }} sx={{ backgroundColor: styleColors.fogGray }} borderRadius="10px">
      <PrimaryHeading color={styleColors.metalGray} textAlign="center">
        Đánh Giá
      </PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between">
        <Rate key={rate.name} rate={rate} />
        <Divider />
        <Rate key={rate.name} rate={rate} />
      </Box>
    </Box>
  );
}
