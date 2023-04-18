import styleColors from "@/styles/styleColors";
import { Favorite} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CustomLink from "./CustomLink";

export default function AdminFooter() {
  return (
    <Box>
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
