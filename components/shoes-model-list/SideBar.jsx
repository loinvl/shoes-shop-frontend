import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Slider, Stack, Typography } from "@mui/material";
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
  const [brand, setBrand] = useState('');

  const handleChooseBrand = (event) => {
    setBrand(event.target.value);
  };

  return (
    <Box p={{ xs: 1, md: 3 }} sx={{ border: `1px solid ${styleColors.cloudyGray}`, borderRadius: "1em" }}>
      <Box display="flex" flexDirection={{ xs: "row", sm: "column" }} gap={2}>
        <Box my={3} flex={2}>
          <Typography sx={{ fontSize: { xs: "1.1em", md: "1.3em" } }} fontWeight={600} color={styleColors.oilBlack}>
            Khoảng giá
          </Typography>
          <Box mt={3}>
            <Box
              display="flex"
              flexDirection={{ xs: "row", sm: "column", md: "row" }}
              justifyContent="space-between"
              gap={2}
            >
              <NumberInput fullWidth label="Từ" type="number" />
              <NumberInput fullWidth label="Đến" type="number" />
            </Box>
            <Box mt={2}>
              <PrimaryButton fullWidth>ÁP DỤNG</PrimaryButton>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box my={3} flex={1}>
          <Typography sx={{ fontSize: { xs: "1.1em", md: "1.3em" } }} fontWeight={600} color={styleColors.oilBlack}>
            Kích thước
          </Typography>
          <Box mt={3} display="flex" flexDirection="column" gap={2}>
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
      </Box>
      <Divider />
      <Box my={3}>
        <Typography sx={{ fontSize: { xs: "1.1em", md: "1.3em" } }} fontWeight={600} color={styleColors.oilBlack}>
          Thương Hiệu
        </Typography>
        <Box mt={3} display={{ xs: "none", sm: "block" }}>
          {brands.map((brand, index) => (
            <Typography key={index} color={styleColors.metalGray} sx={{ fontSize: "1.1em" }}>
              {brand}
            </Typography>
          ))}
        </Box>
        <Box mt={3} display={{ xs: "block", sm: "none" }}>
          <FormControl fullWidth>
            <InputLabel id="brand">Chọn</InputLabel>
            <Select labelId="brand" id="brandList" value={brand} label="Chọn" onChange={handleChooseBrand}>
              {brands.map((brand, index) => (
                <MenuItem key={index} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
