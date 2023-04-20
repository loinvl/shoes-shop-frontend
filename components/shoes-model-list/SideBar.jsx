import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Slider, Stack, Typography } from "@mui/material";
import styleColors from "@/styles/styleColors";
import { useEffect, useState } from "react";
import { NumberInput, PrimaryInput } from "../StyledTextField";
import { PrimaryButton } from "../StyledButton";
import brandAPI from "@/api/brandAPI";
import { FourthHeading, ThirdHeading } from "../StyledTypography";

// mock data
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

export default function SideBar({ onChange }) {
  const [brandList, setBrandList] = useState([]);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [size, setSize] = useState(null);
  const [brandID, setBrandID] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await brandAPI.getBrandList();

      if (!res.success) {
        // handle error
        return;
      }

      setBrandList(res.data.brandList);
    })();
  }, []);

  const handleBrandChoice = (brandID) => {
    setBrandID(brandID);
    onChange(from, to, size, brandID);
  };
  return (
    <Box p={{ xs: 1, md: 3 }} sx={{ border: `1px solid ${styleColors.cloudyGray}`, borderRadius: "1em" }}>
      <Box display="flex" flexDirection={{ xs: "row", sm: "column" }} gap={2}>
        <Box my={3} flex={2}>
          <FourthHeading>
            Khoảng giá
          </FourthHeading>
          <Box mt={3}>
            <Box
              display="flex"
              flexDirection={{ xs: "row", sm: "column", md: "row" }}
              justifyContent="space-between"
              gap={2}
            >
              <NumberInput fullWidth label="Từ" type="number" value={from || ""} onChange={(e) => setFrom(e.target.value)} />
              <NumberInput fullWidth label="Đến" type="number" vallue={to || ""} onChange={(e) => setTo(e.target.value)} />
            </Box>
            <Box mt={2}>
              <PrimaryButton fullWidth onClick={() => onChange(from, to, size, brandID)}>
                ÁP DỤNG
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box my={3} flex={1}>
          <FourthHeading>
            Kích thước
          </FourthHeading>
          <Box mt={3} display="flex" flexDirection="column" gap={2}>
            <Box flex={5}>
              <NumberInput fullWidth label="Size" type="number" value={size || ""} onChange={(e) => setSize(e.target.value)} />
            </Box>
            <Box flex={3}>
              <PrimaryButton fullWidth sx={{ height: "100%" }} onClick={() => onChange(from, to, size, brandID)}>
                ÁP DỤNG
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box my={3}>
        <FourthHeading>
          Thương Hiệu
        </FourthHeading>
        <Box mt={3} display={{ xs: "none", sm: "block" }}>
          <Typography
            color={brandID === null ? styleColors.blue : styleColors.metalGray}
            sx={{ fontSize: "1.1em", ":hover": { color: styleColors.blue, cursor: "pointer" } }}
            onClick={(e) => handleBrandChoice(null)}
          >
            TẤT CẢ
          </Typography>
          {brandList.map((brand) => (
            <Typography
              key={brand.brandID}
              color={brand.brandID === brandID ? styleColors.blue : styleColors.metalGray}
              sx={{ fontSize: "1.1em", ":hover": { color: styleColors.blue, cursor: "pointer" } }}
              onClick={(e) => handleBrandChoice(brand.brandID)}
            >
              {brand.brandName}
            </Typography>
          ))}
        </Box>
        <Box mt={3} display={{ xs: "block", sm: "none" }}>
          <FormControl fullWidth>
            <InputLabel id="brand">Chọn</InputLabel>
            <Select
              labelId="brand"
              id="brandList"
              value={brandID || 0}
              label="Chọn"
              onChange={(e) => handleBrandChoice(e.target.value === 0 ? null : e.target.value)}
            >
              <MenuItem value={0}>
                TẤT CẢ
              </MenuItem>
              {brandList.map((brand) => (
                <MenuItem key={brand.brandID} value={brand.brandID}>
                  {brand.brandName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
