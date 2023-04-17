import customerAPI from "@/api/customerAPI";
import uploadAPI from "@/api/uploadAPI";
import { PrimaryButton, SecondaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText } from "@/components/StyledTypography";
import { StyledImage } from "@/components/StyledImage";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import defaultValues from "@/utils/defaultValues";
import { Image, PhotoCamera, Settings, Upload, Watch } from "@mui/icons-material";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [enableChange, setEnableChange] = useState(false);
  const inputRef = useRef();

  const dispatch = useDispatch();

  // handle submit form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // get profile
  useEffect(() => {
    (async () => {
      const res = await customerAPI.getProifle();

      // handle error res
      if (!res.success) {
        dispatch(showErrorMessage("Lỗi khi tải dữ liệu"));
        return;
      }

      // handle success res
      const profile = res.data.profile;
      setProfile(profile);
      setValue("customerName", profile.customerName);
      setValue("email", profile.email);
      setValue("phone", profile.phone || "");
      setValue("address", profile.address || "");
      setImageUrl(null);
    })();
  }, [enableChange]);

  // preview image before upload
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
      setImageFile(event.target.files[0]);
    }
  };

  // handle update profile
  const handleUpdateProfile = async (data) => {
    // call api to upload image
    let imageLink = null;
    if (imageFile) {
      const resUploadImage = await uploadAPI.uploadImage(imageFile);

      // handle error res
      if (!resUploadImage.success) {
        dispatch(showErrorMessage("Lỗi khi tải ảnh lên, hãy thử lại"));
        return;
      }

      // handle success res
      imageLink = resUploadImage.data.imageLink;
    }

    // call api to update profile
    data.avatarLink = imageLink;
    console.log(data);
    const resUpdateProfile = await customerAPI.updateProfile(data);

    // handle error res
    if(!resUpdateProfile.success){
        dispatch(showErrorMessage("Lỗi khi lưu, hãy thử lại"));
        return;
    }

    // handle success res
    dispatch(showMessage("Cập nhật thành công"));
    setProfile(resUpdateProfile.data.newProfile);
    setEnableChange(false);
  };

  return (
    profile && (
      <Container>
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <Box mb={5}>
            <Box>
              <Typography variant="h4" fontWeight="600" textAlign="center">
                THÔNG TIN CÁ NHÂN
              </Typography>
            </Box>
            <Box mt={3} display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Stack flex={{ xs: 2, md: 1 }} px={{ xs: "15%", sm: "3%" }} spacing={3}>
                <Box sx={{ width: "100%", height: "auto", aspectRatio: "4/5" }}>
                  <StyledImage
                    src={imageUrl || profile.avatarLink || defaultValues.avatarProfileLink}
                    alt="avatar"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Stack direction="row" justifyContent="center" spacing={3}>
                  <PrimaryButton
                    startIcon={<PhotoCamera />}
                    disabled={!enableChange}
                    onClick={(e) => {
                      inputRef.current.click();
                    }}
                  >
                    Chọn Ảnh
                    <input hidden accept="image/*" type="file" onChange={onImageChange} ref={inputRef} />
                  </PrimaryButton>
                </Stack>
              </Stack>
              <Box my={{ xs: 3, sm: 0 }}>
                <Divider />
              </Box>
              <Stack flex={{ xs: 3, md: 2 }} px={{ xs: "3%", md: "5%" }} spacing={3}>
                <Box>
                  <Typography mb={1}>Họ Tên:</Typography>
                  <Box>
                    <PrimaryInput
                      name="customerName"
                      fullWidth
                      disabled={!enableChange}
                      {...register("customerName", {
                        required: "Tên không được để trống",
                        pattern: {
                          value:
                            /^[a-zA-ZàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ,.'-]{0,50}$/i,
                          message: "Tên gồm các chữ cái việt nam và không quá 50 ký tự",
                        },
                      })}
                    ></PrimaryInput>
                    {errors.customerName && <ErrorText>{errors.customerName.message}</ErrorText>}
                  </Box>
                </Box>
                <Box>
                  <Typography mb={1}>Số điện thoại:</Typography>
                  <Box>
                    <PrimaryInput
                      name="phone"
                      fullWidth
                      disabled={!enableChange}
                      {...register("phone", {
                        pattern: {
                          value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
                          message: "Số điện thoại không đúng",
                        },
                      })}
                    ></PrimaryInput>
                    {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                  </Box>
                </Box>
                <Box>
                  <Typography mb={1}>Email:</Typography>
                  <PrimaryInput
                    name="email"
                    fullWidth
                    disabled={!enableChange}
                    InputProps={{
                      readOnly: true,
                    }}
                    {...register("email")}
                  />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </Box>
                <Box>
                  <Typography mb={1}>Địa chỉ:</Typography>
                  <PrimaryInput
                    fullWidth
                    multiline
                    disabled={!enableChange}
                    rows={5}
                    placeholder="Ghi rõ: Số nhà, tên đường - Xã/Phường - Huyện/Quận - Tỉnh/Thành Phố"
                    {...register("address")}
                  ></PrimaryInput>
                  {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
                </Box>
                <Stack direction="row" justifyContent="center" spacing={3}>
                  <PrimaryButton startIcon={<Settings />} onClick={(e) => setEnableChange(!enableChange)}>
                    {enableChange ? "Bỏ Thay Đổi" : "Thay Đổi"}
                  </PrimaryButton>
                  <PrimaryButton type="submit" disabled={!enableChange}>
                    Lưu
                  </PrimaryButton>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </form>
      </Container>
    )
  );
}
