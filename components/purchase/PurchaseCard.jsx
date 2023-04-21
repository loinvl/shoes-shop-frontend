import { StyledImage } from "@/components/StyledImage";
import styleColors from "@/styles/styleColors";
import status from "@/utils/statusUtil";
import convertUtil from "@/utils/convertUtil";
import { Box, Divider, Stack, Typography } from "@mui/material";
import RateModal from "./RateModal";
import uploadAPI from "@/backendAPI/uploadAPI";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import { useEffect, useState } from "react";
import rateAPI from "@/backendAPI/rateAPI";
import { useDispatch } from "react-redux";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import RateCard from "../shoes-model/RateCard";
import { FourthHeading, NormalHeading } from "../StyledTypography";
import { CustomDialog } from "../StyledDialog";
import { AlertDialog } from "../StyledDialog";
import { useRouter } from "next/router";

export default function PurchaseCard({ purchase, rate = false }) {
  // one rate map with one orderdetail, not rate is null map with orderdetail
  const [rateList, setRateList] = useState([]);
  const [previewRateIndex, setPreviewRateIndex] = useState(null);

  const dispatch = useDispatch();

  // get rate
  useEffect(() => {
    (async () => {
      // call api to get rate of one purchase order
      const res = await rateAPI.getRatesOfPurchase(purchase.purchaseOrderID);

      // handle error res
      if (!res.success) {
        dispatch(showErrorMessage("Lỗi khi tải đánh giá"));
        return;
      }

      // handle success res
      const ratesRes = res.data.rateList;
      console.log(ratesRes);
      const rateList = purchase.orderDetail.map((item) => {
        const rate = ratesRes.find((rate) => rate.shoes.shoesID === item.shoes.shoesID);
        return rate;
      });

      console.log(rateList);
      setRateList(rateList);
    })();
  }, []);

  // handle rate on one shoes
  const handleDataRate = async (purchaseOrderID, shoesID, star, feedback, imageFile) => {
    // call api to upload feedback image
    let imageLink = "";
    if (imageFile) {
      const resUpload = await uploadAPI.uploadImage(imageFile);

      // handle error res
      if (!resUpload.success) {
        dispatch(showErrorMessage("Lỗi khi tải ảnh lên, hãy thử lại"));
        return;
      }

      // handle success res
      imageLink = resUpload.data.imageLink;
    }

    // call api to post rate to server
    console.log(purchaseOrderID, shoesID, star, feedback, imageLink);
    const resRate = await rateAPI.rate(purchaseOrderID, shoesID, star, feedback, imageLink);

    // handle error res
    if(!resRate.success){
      dispatch(showErrorMessage("Lỗi khi đánh giá, hãy thử lại"));
      return;
    }

    // handle success res
    dispatch(showMessage("Đánh giá thành công"));
    const orderDetailIndex = purchase.orderDetail.findIndex(item => item.shoes.shoesID === shoesID);
    const newRateList = [...rateList];
    newRateList[orderDetailIndex] = resRate.data.newRate;
    setRateList(newRateList);
  }

  return (
    purchase && (
      <Box>
        <Box>
          {purchase.orderDetail.map((item, index) => (
            <Box key={index}>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="end"
                gap={{ xs: 1, md: 3 }}
                p={{ xs: 1, md: 3 }}
                sx={{ border: `1px solid ${styleColors.gray.medium}`, backgroundColor: styleColors.white }}
              >
                <Box display="flex" width="100%" alignItems="center" gap={{ sm: 1, md: 3 }}>
                  <Box>
                    <StyledImage
                      src={item.shoesModel.images[0].imageLink}
                      alt="shoes model"
                      width="80px"
                      height="80px"
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: { sm: "1.2em" } }} fontWeight="400" textAlign="justify">
                      {item.shoesModel.shoesModelName}
                    </Typography>
                    <Typography>Màu sắc: {item.shoes.color}</Typography>
                    <Typography>Kích thước: {item.shoes.size}</Typography>
                    <Typography>
                      Đơn giá x Số lượng: {convertUtil.toPriceString(item.unitPrice)}x{item.quantity}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NormalHeading color={styleColors.secondary}>
                    {convertUtil.toPriceString(item.unitPrice * item.quantity)}
                  </NormalHeading>
                </Box>
              </Box>
              {rate && (
                <Stack display="flex" width="100%">
                  {rateList[index] ? (
                    <Box>
                      <Stack alignItems="end">
                        <PrimaryButton onClick={(e) => setPreviewRateIndex(index)}>Xem Đánh Giá</PrimaryButton>
                      </Stack>
                      <AlertDialog
                        fullWidth
                        open={previewRateIndex == index}
                        title="Đánh Giá"
                        content={<RateCard rate={rateList[index]} />}
                        onClose={(e) => setPreviewRateIndex(null)}
                      />
                    </Box>
                  ) : (
                    <Stack alignItems="end">
                      <RateModal
                        disabled={purchase.orderStatus != 4}
                        order={{ purchaseOrderID: purchase.purchaseOrderID, shoesID: item.shoes.shoesID }}
                        handleDataRate={handleDataRate}
                      />
                    </Stack>
                  )}
                </Stack>
              )}
              <Box my={3}>
                <Divider />
              </Box>
            </Box>
          ))}
        </Box>
        <Stack mt={{ xs: 3, sm: 5 }}>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between">
            <Typography>Ngày đặt hàng: {convertUtil.toVietNamTime(purchase.orderTime)}</Typography>
            <Box>
              <NormalHeading
                color={
                  purchase.orderStatus == 0
                    ? styleColors.status.normal
                    : purchase.orderStatus == 4
                    ? styleColors.status.success
                    : purchase.orderStatus == 5
                    ? styleColors.status.error
                    : styleColors.status.progress
                }
              >
                {status.purchaseStatus[purchase.orderStatus]}
              </NormalHeading>
            </Box>
          </Stack>
          <Box>
            <FourthHeading textAlign={{ xs: "left", sm: "right" }} color={styleColors.secondary}>
              Tổng tiền:&nbsp;
              {convertUtil.toPriceString(
                purchase.orderDetail.reduce((pre, cur) => pre + cur.unitPrice * cur.quantity, 0)
              )}
            </FourthHeading>
          </Box>
        </Stack>
      </Box>
    )
  );
}
