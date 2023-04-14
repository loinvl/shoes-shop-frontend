import { Box, Container, Stack, Typography } from "@mui/material";
import RateCard from "./RateCard";

export default function ShoesModelRate({ rates }) {
  return (
    rates && (
      <Stack>
        <Typography fontWeight="600" fontSize="1.6em">
          Đánh Giá Sản Phẩm
        </Typography>
        <Stack gap={5}>
          {rates.length === 0 ? (
            <Typography textAlign="center">Chưa có đánh giá nào!</Typography>
          ) : (
            rates.map((rate, index) => (
              <Box key={index}>
                <RateCard rate={rate} />
              </Box>
            ))
          )}
        </Stack>
      </Stack>
    )
  );
}
