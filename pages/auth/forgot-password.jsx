import authAPI from "@/backendAPI/authAPI";
import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText, SecondaryHeading } from "@/components/StyledTypography";
import IsLogout from "@/components/hoc/IsLogout";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // call api to send email then reset password
    console.log(data);
    const res = await authAPI.forgotPassword(data.email);

    // handle error res
    if (!res.success) {
      if (res.errorCode == 1) {
        setError("email", { message: "Email chưa đăng ký tài khoản" });
      }

      if (res.errorCode == 500) {
        dispatch(showErrorMessage("Lỗi hệ thống, hãy thử lại"));
      }
      return;
    }

    // handle success res
    dispatch(showMessage("Link đổi mật khẩu đã được gửi vào email của bạn, hãy kiểm tra"));
  };
  return (
    <IsLogout>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
            <Box px={{ xs: 3, sm: 5 }} py={8} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
              <Box>
                <SecondaryHeading textAlign="center">
                  Quên Mật Khẩu
                </SecondaryHeading>
              </Box>
              <Box mt={3}>
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
              <Box mt={1} display="flex" justifyContent="end">
                <CustomLink href="/auth/login">
                  <Typography sx={{ color: styleColors.blue }}>Đăng nhập</Typography>
                </CustomLink>
              </Box>
            </Box>
          </Box>
        </form>
      </Container>
    </IsLogout>
  );
}
