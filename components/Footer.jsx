import styleColors from "@/styles/styleColors";
import { ContactPhone, Facebook, Favorite, Twitter, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <Box>
      <Box sx={{ backgroundColor: styleColors.fogGray }}>
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
                  <ContactPhone />
                </CustomLink>
                <CustomLink href="#facebook">
                  <Facebook />
                </CustomLink>
                <CustomLink href="#youtube">
                  <YouTube />
                </CustomLink>
                <CustomLink href="#twitter">
                  <Twitter />
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
                <Typography variant="h6">Lời Cảm Ơn</Typography>
                <Typography>
                  Mến chào quý khách hàng của Shoes Shop! Cám ơn bạn đã luôn tin tưởng và ủng hộ chúng tôi. Bạn trao
                  chúng tôi cơ hội, chùng tôi trao bạn niềm tin!
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box>
                  <Typography variant="h6">Thông Tin Liên Hệ</Typography>
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
        sx={{ color: styleColors.metalGray, backgroundColor: styleColors.cyanBlue }}
      >
        <Typography>@2023 Shoes Shop Made With&nbsp;</Typography>
        <Favorite sx={{ color: styleColors.red }} />
        <Typography>&nbsp;By&nbsp;</Typography>
        <Typography color={styleColors.black} fontWeight={600}>
          <CustomLink href="https://www.facebook.com/profile.php?id=100017728178359">NguyenVanLoi</CustomLink>
        </Typography>
      </Box>
    </Box>
  );
}
