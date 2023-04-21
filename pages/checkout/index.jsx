import customerAPI from "@/api/customerAPI";
import purchaseAPI from "@/api/purchaseAPI";
import { PrimaryButton } from "@/components/StyledButton";
import { PrimaryInput } from "@/components/StyledTextField";
import { ErrorText, FourthHeading, ThirdHeading } from "@/components/StyledTypography";
import PurchaseOrder from "@/components/checkout/PurchaseOrder";
import IsLogin from "@/components/hoc/IsLogin";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

/* mock data
const orders = [
    {
        shoesModelName: "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
        quantity: 5,
        color: "Xanh",
        size: 38,
        unitPrice: 500000
    },
    {
        shoesModelName: "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
        quantity: 5,
        color: "Xanh",
        size: 38,
        unitPrice: 500000
    },
    {
        shoesModelName: "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
        quantity: 5,
        color: "Xanh",
        size: 38,
        unitPrice: 500000
    },
    {
        shoesModelName: "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
        quantity: 5,
        color: "Xanh",
        size: 38,
        unitPrice: 500000
    },
    {
        shoesModelName: "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
        quantity: 5,
        color: "Xanh",
        size: 38,
        unitPrice: 500000
    }
]
*/

export default function CheckoutPage() {
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // get shoes id list from query params
      let shoesIDList = router.query.ShoesID || [];
      shoesIDList = Array.isArray(shoesIDList) ? shoesIDList : [shoesIDList];

      // call api to get info customer and shoes
      const resProfile = await customerAPI.getProifle();
      const resOrder = await purchaseAPI.getOrder(shoesIDList);

      // handle error res
      if (!resProfile.success) {
        dispatch(showErrorMessage("Lỗi trong quá trình lấy dữ liệu, hãy thử lại"));
        return;
      }

      if (!resOrder.success) {
        dispatch(showErrorMessage("Lỗi trong quá trình lấy dữ liệu, hãy thử lại"));
        return;
      }

      // handle success res
      const profile = resProfile.data.profile;
      const shoesList = resOrder.data.shoesList;

      console.log(profile);
      console.log(shoesIDList);

      setProfile(profile);
      setOrders(shoesList);

      // fill form
      setValue("customerName", profile.customerName);
      setValue("email", profile.email);
      setValue("phone", profile.phone || "");
      setValue("address", profile.address || "");
    })();
  }, [router]);

  // handle submit form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const receiveCustomerInfo = data;
    const checkoutDetails = orders.map((order) => ({ shoesID: order.shoes.shoesID, quantity: order.quantity }));
    handleCheckout(receiveCustomerInfo, checkoutDetails);
  };

  // handle checkout when click "Mua hàng" button
  const handleCheckout = async (receiveCustomerInfo, checkoutDetails) => {
    const purchase = { ...receiveCustomerInfo, checkoutDetails };

    // call api to checkout
    const res = await purchaseAPI.checkout(purchase);

    // handle error res
    if (!res.success) {
      switch (res.errorCode) {
        case 1:
          dispatch(showErrorMessage("Bạn chưa chọn sản phẩm để thanh toán"));
          break;
        case 2:
          dispatch(showErrorMessage("Hàng trong kho không đủ"));
          break;
        case 3:
          dispatch(showErrorMessage("Lỗi trong quá trình tạo đơn hàng, hãy thử lại"));
          break;
        default:
          dispatch(showErrorMessage("Lỗi server, hãy thử lại"));
          break;
      }
      return;
    }

    // handle success res
    dispatch(showMessage("Đặt Hàng Thành Công"));
    router.push("/purchase");
  };

  return (
    <IsLogin>
      <Container>
        <Box mb={5}>
          <Box>
            <ThirdHeading textAlign="center">ĐẶT HÀNG</ThirdHeading>
          </Box>
          <Box my={2}>
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={5}>
              <Box flex={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack p={5} gap={3} sx={{ border: `1px solid ${styleColors.gray.medium}`, borderRadius: "0.5em" }}>
                    <Box>
                      <FourthHeading>THÔNG TIN NGƯỜI NHẬN</FourthHeading>
                    </Box>
                    <Box>
                      <Typography mb={1}>Tên người nhận:</Typography>
                      <Box>
                        <PrimaryInput
                          name="customerName"
                          fullWidth
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
                          {...register("phone", {
                            required: "Số điện thoại không được để trống",
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
                      <Typography mb={1}>Địa chỉ:</Typography>
                      <PrimaryInput
                        fullWidth
                        multiline
                        rows={2}
                        placeholder="Ghi rõ: Số nhà, tên đường - Xã/Phường - Huyện/Quận - Tỉnh/Thành Phố"
                        {...register("address", { required: "Địa chỉ không được để trống" })}
                      ></PrimaryInput>
                      {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
                    </Box>
                    <Box>
                      <Typography mb={1}>Ghi chú:</Typography>
                      <PrimaryInput
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Lời nhắn cho cửa hàng"
                        {...register("note")}
                      ></PrimaryInput>
                    </Box>
                  </Stack>
                </form>
              </Box>
              <Box flex={1}>
                <PurchaseOrder orders={orders} />
                <Box mt={3}>
                  <PrimaryButton size="large" fullWidth onClick={handleSubmit(onSubmit)}>
                    Đặt Hàng
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </IsLogin>
  );
}
