import { Box } from "@mui/material";
import Typography from "../StyledTypography";

export default function ShoesModelDesciption({ description }) {
  return (
    <Box>
      <Typography fontWeight="600" fontSize="1.6em">Mô Tả Sản Phẩm</Typography>
      <Typography textAlign="justify">{description}</Typography>
    </Box>
  );
}
