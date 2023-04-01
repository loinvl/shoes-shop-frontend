import { Box, Divider } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import styleColors from "@/styles/styleColors";
import ContactCard from "../contact/ContactCard";
import { DeliveryDining, Email, Home, Paid, Payment, Phone } from "@mui/icons-material";

export default function Feature() {
  const delivery = {
    icon: <DeliveryDining sx={{ fontSize: "5em" }} />,
    title: "Free Ship",
    texts: ["Ưu đãi hằng ngày", "Số lượng có hạn"],
  };
  const checkout = {
    icon: <Payment sx={{ fontSize: "5em" }} />,
    title: "Thanh Toán",
    texts: ["Cho phép trả góp", "Online hoặc offline"],
  };
  const refund = {
    icon: <Paid sx={{ fontSize: "5em" }} />,
    title: "Hoàn Trả",
    texts: ["Dễ dang hoàn trả", "Chăm sóc khách hàng 24/7"],
  };
  return (
    <Box py={10} textAlign="center">
      <PrimaryHeading color={styleColors.black}>Mua Sắm Tiện Lợi</PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={5}>
        <Box flex={1}>
          <ContactCard key={delivery.title} content={delivery} width="100%" height="250px" />
        </Box>
        <Divider/>
        <Box flex={1}>
          <ContactCard key={checkout.title} content={checkout} width="100%" height="250px" />
        </Box>
        <Divider/>
        <Box flex={1}>
          <ContactCard key={refund.title} content={refund} width="100%" height="250px" />
        </Box>
      </Box>
    </Box>
  );
}
