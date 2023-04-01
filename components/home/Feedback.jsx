import { Box, Divider } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import PromotionalRate from "./PromotionalRate";
import styleColors from "@/styles/styleColors";

export default function () {
  const firstRate = {
    name: "Khách Hàng",
    avatar: "/banner/banner7.png",
    content: `Cửa hàng rất tốt, sản phẩm chất lượng, mua sắm ở đây không lo về giá cả, chỉ lo không có tiền. Mình sẽ ủng hộ shop nhiều hơn nữa!`,
  };

  const secondRate = {
    name: "Khách Hàng",
    avatar: "/banner/banner6.png",
    content: `Mua sắm ở đây không lo về giá cả, chỉ lo không có tiền. Cửa hàng rất tốt, sản phẩm chất lượng. Mình sẽ ủng hộ shop nhiều hơn nữa!`,
  };

  return (
    <Box py={10} px={{ xs: 2, sm: 5, md: 10 }} sx={{ backgroundColor: styleColors.fogGray }} borderRadius="10px">
      <PrimaryHeading color={styleColors.black} textAlign="center">
        Đánh Giá
      </PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={{xs: 2, md: 5}}>
        <PromotionalRate key={1} rate={firstRate} />
        <Divider />
        <PromotionalRate key={2} rate={secondRate} />
      </Box>
    </Box>
  );
}
