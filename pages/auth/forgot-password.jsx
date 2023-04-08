import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function ForgotPasswordPage() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <Box p={{xs: 3, sm: 5}} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
          <Box>
            <Typography variant="h4" fontWeight="600" textAlign="center">
              Quên Mật Khẩu
            </Typography>
          </Box>
          <Stack mt={8} gap={5}>
            <PrimaryInput fullWidth label="Nhập email đã đăng kí tài khoản?" />
          </Stack>

          <Box mt={5}>
            <PrimaryButton size="large" fullWidth>
              Xác Nhận
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
