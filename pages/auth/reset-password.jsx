import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText } from "@/components/StyledTypography";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
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
                Mật Khẩu Mới
              </Typography>
            </Box>
            <Stack mt={8} gap={5}>
              <Box>
                <PrimaryInput
                  name="password"
                  fullWidth
                  type="password"
                  label="Mật khẩu mới"
                  {...register("password", {
                    required: "Không được để trống",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+])[A-Za-z\d~!@#$%^&*()_+]{8,}$/,
                      message: "Mật khẩu gồm ít nhất 1 ký tự đặc biệt, 1 ký tự in hoa, 1 số và từ 8 ký tự trở lên",
                    },
                  })}
                />
                {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
              </Box>
              <Box>
                <PrimaryInput
                  name="confirmPassword"
                  fullWidth
                  type="password"
                  label="Xác nhận mật khẩu mới"
                  {...register("confirmPassword", {
                    required: "Không được để trống",
                    validate: (confirmPassword) => confirmPassword === watch("password") || "Mật khẩu không khớp",
                  })}
                />
                {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
              </Box>
            </Stack>

            <Box mt={5}>
              <PrimaryButton size="large" fullWidth type="submit">
                Xác Nhận
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
      </form>
    </Container>
  );
}
