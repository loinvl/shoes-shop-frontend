import { Box, Stack, Typography } from "@mui/material";
import { NumberInput, PrimaryInput } from "../StyledTextField";
import styleColors from "@/styles/styleColors";

export default function PurchaseInfo() {
  return (
    <Stack p={5} gap={3} sx={{border: `1px solid ${styleColors.cloudyGray}`, borderRadius: "1em"}}>
      <Box>
        <Typography mb={1}>Tên người nhận:</Typography>
        <PrimaryInput fullWidth></PrimaryInput>
      </Box>
      <Box>
        <Typography mb={1}>Số điện thoại:</Typography>
        <NumberInput type="number" fullWidth></NumberInput>
      </Box>
      <Box>
        <Typography mb={1}>Email:</Typography>
        <PrimaryInput fullWidth></PrimaryInput>
      </Box>
      <Box>
        <Typography mb={1}>Địa chỉ:</Typography>
        <PrimaryInput fullWidth multiline rows={2} placeholder="Ghi rõ: Số nhà, tên đường - Xã/Phường - Huyện/Quận - Tỉnh/Thành Phố"></PrimaryInput>
      </Box>
      <Box>
        <Typography mb={1}>Ghi chú:</Typography>
        <PrimaryInput fullWidth multiline rows={3} placeholder="Lời nhắn cho cửa hàng"></PrimaryInput>
      </Box>
    </Stack>
  );
}
