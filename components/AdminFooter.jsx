import styleColors from "@/styles/styleColors";
import { Favorite} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import { NormalHeading } from "./StyledTypography";

export default function AdminFooter() {
  return (
    <Box>
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
