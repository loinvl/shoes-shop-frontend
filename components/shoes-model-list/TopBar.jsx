import { Box, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { PrimaryInput } from "../StyledTextField";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { PrimaryButton } from "../StyledButton";

export default function TopBar({ onChange }) {
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState("");

  const handleSortChoice = (e) => {
    const newSort = e.target.value == 0 ? null : e.target.value;
    setSort(newSort);
    onChange(search, newSort);
  };

  return (
    <Box display="flex" gap={5} alignItems="center">
      <Box flex={2}>
        <PrimaryInput
          label="Tìm kiếm"
          fullWidth
          onKeyDown={(e) => {if(e.key==='Enter'){onChange(search, sort)}}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PrimaryButton sizes="large" sx={{ width: { md: "100px" } }} onClick={(e) => onChange(search, sort)}>
                  <Search />
                </PrimaryButton>
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box flex={1}>
        <FormControl fullWidth>
          <InputLabel id="sort">Sắp xếp</InputLabel>
          <Select labelId="sort" id="sort-list" value={sort || 0} label="Sắp xếp" onChange={handleSortChoice}>
            <MenuItem value={0}>Mặc định</MenuItem>
            <MenuItem value={1}>Giá tăng dần</MenuItem>
            <MenuItem value={2}>Giá giảm dần</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
