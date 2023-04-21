import styleColors from "@/styles/styleColors";
import { Box, Stack, TextField } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import { PrimaryInput } from "../StyledTextField";
import { PrimaryButton } from "../StyledButton";

export default function Question() {
  return (
    <Box py={10} px={{ xs: 2, sm: 5, md: 10 }} sx={{ backgroundColor: styleColors.gray.light }} borderRadius="10px">
      <PrimaryHeading color={styleColors.primary} textAlign="center">
        Hỏi - Đáp
      </PrimaryHeading>
      <Stack mt={5} spacing={5}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={5}>
          <Box flex={1}>
            <PrimaryInput label="Họ tên" fullWidth />
          </Box>
          <Box flex={1}>
            <PrimaryInput label="Email" fullWidth />
          </Box>
        </Box>
        <Box>
          <PrimaryInput label="Tiêu đề" fullWidth />
        </Box>
        <Box>
          <PrimaryInput label="Nội dung" fullWidth multiline rows={5}/>
        </Box>
        <PrimaryButton size="large">Gửi</PrimaryButton>
      </Stack>
    </Box>
  );
}
