import authAPI from "@/api/authAPI";
import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText } from "@/components/StyledTypography";
import { loginSuccess } from "@/redux/userReducer";
import styleColors from "@/styles/styleColors";
import authUtil from "@/utils/authUtil";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function AdminLoginPage() {
  // control form use react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  
  // distpatch action
  const dispatch = useDispatch();

  // next/router
  const router = useRouter();

  const onSubmit = async (data) => {
    // data
    console.log(data);

    // call api to login
    const res = await authAPI.postLoginData(data);

    // handle res
    if (!res.success) {
      // handle error
      console.log(res);

      // show message to user
      if (res.message.includes("Email")) {
        setError("email", { message: res.message });
        return;
      }

      if (res.message.includes("Mật khẩu")){
        setError("password", { message: res.message });
        return;
      }

      return;
    }

    // success
    const { accessToken, refreshToken } = res.data;
    authUtil.storeToken(accessToken, refreshToken);
    const user = authUtil.getUserPayload(accessToken);
    dispatch(loginSuccess(user));
    
    // redirect to previous page
    router.back();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <Box p={{ xs: 3, sm: 5 }} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
            <Box>
              <Typography variant="h4" fontWeight="600" textAlign="center">
                Admin
              </Typography>
            </Box>
            <Stack mt={8} gap={5}>
              <Box>
                <PrimaryInput
                  name="email"
                  fullWidth
                  label="Email"
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
              <Box>
                <PrimaryInput
                  name="password"
                  fullWidth
                  label="Mật khẩu"
                  type="password"
                  {...register("password", {
                    required: "Không được để trống",
                  })}
                />
                {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
              </Box>
            </Stack>
            <Box mt={5}>
              <PrimaryButton size="large" fullWidth type="submit">
                Đăng Nhập
              </PrimaryButton>
            </Box>
            <Box mt={1} display="flex" justifyContent="end">
              <CustomLink href="/auth/forgot-password">
                <Typography sx={{ color: styleColors.blue }}>Quên mật khẩu?</Typography>
              </CustomLink>
            </Box>
          </Box>
        </Box>
      </form>
    </Container>
  );
}
