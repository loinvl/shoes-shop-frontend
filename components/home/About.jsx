import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box>
      <Box pt={10} px={{ xs: 2, sm: 6, md: 20 }} textAlign="center">
        <Typography
          sx={{
            typography: { xs: { fontSize: "3em", fontWeight: "600" }, sm: { fontSize: "4em", fontWeight: "600" } },
          }}
        >
          Shoes Shop
        </Typography>
        <Typography
          sx={{
            typography: { xs: { fontSize: "2em", fontWeight: "400" }, sm: { fontSize: "2.5em", fontWeight: "400" } },
          }}
        >
          Thời Trang Hiện Đại
        </Typography>
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
