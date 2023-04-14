import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText } from "@/components/StyledTypography";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // do something
    console.log(data);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <Box p={{ xs: 3, sm: 5 }} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
            <Box>
              <Typography variant="h4" fontWeight="600" textAlign="center">
                Quên Mật Khẩu
              </Typography>
            </Box>
            <Box mt={8}>
              <PrimaryInput
                name="email"
                fullWidth
                label="Nhập email đã đăng kí tài khoản?"
                {...register("email", {
                  required: "Không được để trống",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: "Định dạng email không hợp lệ",
                  },
                })}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </Box>

            <Box mt={5}>
              <PrimaryButton size="large" fullWidth type="submit">
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
      </form>
    </Container>
  );
}
