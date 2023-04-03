import { Box, Divider, Slider, Stack, Typography } from "@mui/material";
import styleColors from "@/styles/styleColors";
import { useState } from "react";
import { NumberInput, PrimaryInput } from "../StyledTextField";
import { PrimaryButton } from "../StyledButton";

const brands = [
  "Tất cả",
  "Nike",
  "Adidas",
  "balenciaga",
  "Converse",
  "Nike",
  "Adidas",
  "balenciaga",
  "Converse",
  "Nike",
  "Adidas",
  "balenciaga",
  "Converse",
];

export default function SideBar() {
  return (
    <Box p={3} sx={{ border: `1px solid ${styleColors.cloudyGray}`, borderRadius: "1em" }}>
      <Box my={3}>
        <Typography variant="h6" fontWeight={600} color={styleColors.oilBlack}>
          Khoảng giá
        </Typography>
        <Box mt={3}>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <NumberInput label="Từ" type="number" />
            <NumberInput label="Đến" type="number" />
          </Box>
          <Box mt={2}>
            <PrimaryButton fullWidth>ÁP DỤNG</PrimaryButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box my={3}>
        <Typography variant="h6" fontWeight={600} color={styleColors.oilBlack}>
          Kích thước
        </Typography>
        <Box mt={3} display="flex" gap={2}>
          <Box flex={5}>
            <NumberInput fullWidth label="Size" type="number" />
          </Box>
          <Box flex={3}>
            <PrimaryButton fullWidth sx={{ height: "100%" }}>
              ÁP DỤNG
            </PrimaryButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box my={3}>
        <Typography variant="h6" fontWeight={600} color={styleColors.oilBlack}>
          Thương Hiệu
        </Typography>
        <Box mt={3}>
          {brands.map((brand, index) => (
            <Typography key={index} color={styleColors.metalGray} sx={{ fontSize: "1.1em" }}>
              {brand}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
