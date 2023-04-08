import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Box p={{xs: 3, sm: 5}} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
          <Box>
            <Typography variant="h4" fontWeight="600" textAlign="center">
              Đăng Nhập
            </Typography>
          </Box>
          <Stack mt={8} gap={5}>
            <PrimaryInput fullWidth label="Email" />
            <PrimaryInput fullWidth label="Mật khẩu" type="password" />
          </Stack>

          <Box mt={5}>
            <PrimaryButton size="large" fullWidth>
              Đăng Nhập
            </PrimaryButton>
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            <CustomLink href="/auth/forgot-password">
              <Typography sx={{ color: styleColors.blue }}>Quên mật khẩu?</Typography>
            </CustomLink>
            <CustomLink href="/auth/register">
              <Typography sx={{ color: styleColors.blue }}>Tạo tài khoản</Typography>
            </CustomLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
