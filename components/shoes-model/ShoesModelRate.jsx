import { Box, Stack, Typography } from "@mui/material";
import RateCard from "./RateCard";

export default function ShoesModelRate({ rates }) {
  return (
    <Stack>
      <Typography fontWeight="600" fontSize="1.6em">
        Đánh Giá Sản Phẩm
      </Typography>
      <Stack gap={5}>
        {rates.map((rate, index) => (
          <Box key={index}>
            <RateCard rate={rate} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
