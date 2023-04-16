import authAPI from "@/api/authAPI";
import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText } from "@/components/StyledTypography";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  // register
  const onSubmit = async (data) => {
    // remove confirmPassword property
    delete data.confirmPassword;

    // call api to register a account
    console.log(data);
    const res = await authAPI.register(data);

    // handle error data
    if (!res.success) {
      switch (res.errorCode) {
        case 1:
          setError("email", { message: "Email đã được đăng ký, hãy thử email khác" });
          break;
        case 2:
          dispatch(showErrorMessage("Lỗi trong khi tạo mới tài khoản, hãy thử lại"));
          break;
        case 500:
          dispatch(showErrorMessage("Lỗi hệ thống, hãy thử lại"));
          break;
      }
      return;
    }

    // handle success res
    dispatch(showMessage("Tạo tài khoản thành công"));
    router.push("/auth/login");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={{ sm: 5 }} mb={10} display="flex" justifyContent="center" alignItems="center">
          <Box p={{ xs: 3, sm: 5 }} width={{ xs: "400px", md: "500px" }} border={`1px solid ${styleColors.black}`}>
            <Box>
              <Typography variant="h4" fontWeight="600" textAlign="center">
                Đăng Ký
              </Typography>
            </Box>
            <Stack mt={8} gap={5}>
              <Box>
                <PrimaryInput
                  name="customerName"
                  fullWidth
                  label="Họ tên"
                  {...register("customerName", {
                    required: "Không được để trống",
                    pattern: {
                      value:
                        /^[a-zA-ZàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ,.'-]{0,50}$/i,
                      message: "Tên gồm các chữ cái việt nam và không quá 50 ký tự",
                    },
                  })}
                />
                {errors.customerName && <ErrorText>{errors.customerName.message}</ErrorText>}
              </Box>
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
                  label="Xác nhận mật khẩu"
                  type="password"
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
      </form>
    </Container>
  );
}
