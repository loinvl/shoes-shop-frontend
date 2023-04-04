import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { PrimaryInput } from "../StyledTextField";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { PrimaryButton } from "../StyledButton";

export default function TopBar() {
  const [sort, setSort] = useState("");

  const handleChooseSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box display="flex" gap={5} alignItems="center">
      <Box flex={2}>
        <PrimaryInput
          label="Tìm kiếm"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PrimaryButton sizes="large" sx={{width: {md: "100px"}}}>
                  <Search />
                </PrimaryButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box flex={1}>
        <FormControl fullWidth>
          <InputLabel id="sort">Sắp xếp</InputLabel>
          <Select labelId="sort" id="sort-list" value={sort} label="Sắp xếp" onChange={handleChooseSort}>
            <MenuItem value={1}>Giá tăng dần</MenuItem>
            <MenuItem value={2}>Giá giảm dần</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
