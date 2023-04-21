import styleColors from "@/styles/styleColors";
import { ContactPhone, Facebook, Favorite, Twitter, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomLink from "./CustomLink";
import { FourthHeading, NormalHeading, ThirdHeading } from "./StyledTypography";

export default function Footer() {
  return (
    <Box>
      <Box sx={{ backgroundColor: styleColors.gray.light }}>
        <Container>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="start"
            gap={{ xs: 5, sm: 10, md: 15 }}
            py={{ xs: 3, sm: 5 }}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <Box>
                <CustomLink href="/">
                  <img src="/brand/shoes-shop-logo.png" alt="logo" />
                </CustomLink>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <CustomLink href="#contact">
                  <ContactPhone sx={{ color: styleColors.icon.contact }} />
                </CustomLink>
                <CustomLink href="#facebook">
                  <Facebook sx={{ color: styleColors.icon.facebook }} />
                </CustomLink>
                <CustomLink href="#youtube">
                  <YouTube sx={{ color: styleColors.icon.youtube }} />
                </CustomLink>
                <CustomLink href="#twitter">
                  <Twitter sx={{ color: styleColors.icon.twitter }} />
                </CustomLink>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="start"
              gap={{ xs: 5, md: 15 }}
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <FourthHeading sx={{ color: styleColors.primary }}>Lời Cảm Ơn</FourthHeading>
                <Typography>
                  Mến chào quý khách hàng của Shoes Shop! Cám ơn bạn đã luôn tin tưởng và ủng hộ chúng tôi. Bạn trao
                  chúng tôi cơ hội, chùng tôi trao bạn niềm tin!
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box>
                  <FourthHeading sx={{ color: styleColors.primary }}>Thông Tin Liên Hệ</FourthHeading>
                </Box>
                <Box>
                  <Typography noWrap>Số điện thoại: +84000000000</Typography>
                  <Typography noWrap>Email: shoesshop@example.com</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
        sx={{ color: styleColors.white, backgroundColor: styleColors.primary }}
      >
        <Typography>@2023 Shoes Shop Made With&nbsp;</Typography>
        <Favorite sx={{ color: styleColors.secondary }} />
        <Typography>&nbsp;By&nbsp;</Typography>
        <CustomLink href="https://www.facebook.com/profile.php?id=100017728178359">
          <NormalHeading>NguyenVanLoi</NormalHeading>
        </CustomLink>
      </Box>
    </Box>
  );
}
