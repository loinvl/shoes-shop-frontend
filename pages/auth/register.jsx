import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container>
      <Box mt={{sm: 5}} mb={10} display="flex" justifyContent="center" alignItems="center">
        <Box p={{xs: 3, sm: 5}} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
          <Box>
            <Typography variant="h4" fontWeight="600" textAlign="center">
              Đăng Ký
            </Typography>
          </Box>
          <Stack mt={8} gap={5}>
            <PrimaryInput fullWidth label="Họ tên" />
            <PrimaryInput fullWidth label="Số điện thoại" />
            <PrimaryInput fullWidth label="Email" />
            <PrimaryInput fullWidth label="Mật khẩu" type="password" />
            <PrimaryInput fullWidth label="Xác nhận mật khẩu" type="password" />
          </Stack>

          <Box mt={5}>
            <PrimaryButton size="large" fullWidth>
              Đăng Ký
            </PrimaryButton>
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            <CustomLink href="/auth/login">
              <Typography sx={{ color: styleColors.blue }}>Đăng nhập</Typography>
            </CustomLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
