import { Box } from "@mui/material";
import Typography, { FourthHeading, ThirdHeading } from "../StyledTypography";

export default function ShoesModelDesciption({ description }) {
  return (
    description && (
      <Box>
        <FourthHeading>Mô Tả Sản Phẩm</FourthHeading>
        <Box mt={2}>
          <Typography textAlign="justify">{description}</Typography>
        </Box>
      </Box>
    )
  );
}
