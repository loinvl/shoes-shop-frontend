import { Box, Container, Stack, Typography } from "@mui/material";
import RateCard from "./RateCard";
import { FourthHeading, ThirdHeading } from "../StyledTypography";

export default function ShoesModelRate({ rates }) {
  return (
    rates && (
      <Stack>
        <FourthHeading>
          Đánh Giá Sản Phẩm
        </FourthHeading>
        <Stack gap={5} mt={2}>
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
