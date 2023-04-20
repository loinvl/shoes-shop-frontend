import { Box, Typography } from "@mui/material";
import { PrimaryHeading, SecondaryHeading, ThirdHeading } from "../StyledTypography";
import styleColors from "@/styles/styleColors";

export default function About() {
  return (
    <Box>
      <Box py={10} px={{ xs: 2, sm: 6, md: 20 }} textAlign="center">
        <PrimaryHeading color={styleColors.black}>
          Shoes Shop
        </PrimaryHeading>
        <ThirdHeading color={styleColors.black}>
          Thời Trang Hiện Đại
        </ThirdHeading>
        <Typography mt={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comml
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa
        </Typography>
      </Box>
    </Box>
  );
}
