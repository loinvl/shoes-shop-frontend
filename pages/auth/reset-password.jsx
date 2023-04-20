import authAPI from "@/api/authAPI";
import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText, SecondaryHeading } from "@/components/StyledTypography";
import IsLogout from "@/components/hoc/IsLogout";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function ResetPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { token } = router.query;
    if (!token) {
      dispatch(showErrorMessage("Link không hợp lệ"));
      return;
    }

    // call api to reset password
    console.log(data);
    const res = await authAPI.resetPassword(token, data.password);

    // handle error res
    if (!res.success) {
      switch (res.errorCode) {
        case 1:
          dispatch(showErrorMessage("Token không hợp lệ"));
          break;
        case 500:
          dispatch(showErrorMessage("Lỗi hệ thống, hãy thử lại"));
          break;
      }
      return;
    }

    // handle success res
    dispatch(showMessage("Mật khẩu đã được làm mới"));
    router.push("/auth/login");
  };

  return (
    <IsLogout>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
            <Box px={{ xs: 3, sm: 5 }} py={8} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
              <Box>
                <SecondaryHeading textAlign="center">
                  Mật Khẩu Mới
                </SecondaryHeading>
              </Box>
              <Stack mt={3} gap={5}>
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
    </IsLogout>
  );
}
