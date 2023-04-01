import { Box, Divider } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import styleColors from "@/styles/styleColors";
import ContactCard from "./ContactCard";
import { Email, Home, Phone } from "@mui/icons-material";

export default function Contact() {
  const address = {
    icon: <Home sx={{ fontSize: "5em" }} />,
    title: "Địa Chỉ",
    texts: ["Hải An - Hải Lăng - Quảng Trị"],
  };
  const email = {
    icon: <Email sx={{ fontSize: "5em" }} />,
    title: "Email",
    texts: ["Gmail: shoesshop@gmail.com", "Outlook: shoesshop@outlook.com"],
  };
  const phone = {
    icon: <Phone sx={{ fontSize: "5em" }} />,
    title: "Điện Thoại",
    texts: ["+8400000000", "+8400000000"],
  };
  return (
    <Box py={10} textAlign="center">
      <PrimaryHeading color={styleColors.black}>Liên Hệ</PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={5}>
        <Box flex={1}>
          <ContactCard key={address.title} content={address} width="100%" height="250px" />
        </Box>
        <Divider/>
        <Box flex={1}>
          <ContactCard key={email.title} content={email} width="100%" height="250px" />
        </Box>
        <Divider/>
        <Box flex={1}>
          <ContactCard key={phone.title} content={phone} width="100%" height="250px" />
        </Box>
      </Box>
    </Box>
  );
}
