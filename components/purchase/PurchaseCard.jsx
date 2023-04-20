import { StyledImage } from "@/components/StyledImage";
import styleColors from "@/styles/styleColors";
import status from "@/utils/statusUtil";
import convertUtil from "@/utils/convertUtil";
import { Box, Divider, Stack, Typography } from "@mui/material";
import RateModal from "./RateModal";
import uploadAPI from "@/api/uploadAPI";
import { showErrorMessage } from "@/redux/messageReducer";
import { useEffect, useState } from "react";
import rateAPI from "@/api/rateAPI";
import { useDispatch } from "react-redux";
import { SecondaryButton } from "../StyledButton";
import RateCard from "../shoes-model/RateCard";
import { FourthHeading, NormalHeading } from "../StyledTypography";

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
      const rateList = purchase.orderDetail.map((item) => {
        const rate = res.data.rateList.find((rate) => (rate.shoes.shoesID = item.shoes.shoesID));

        return rate;
      });

      console.log(rateList);
      setRateList(rateList);
    })();
  }, []);
  return (
    purchase && (
      <Box>
        <Box>
          {purchase.orderDetail.map((item, index) => (
            <Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="end"
                gap={{ sm: 1, md: 3 }}
                p={{ xs: 1, md: 3 }}
                key={index}
                sx={{ border: `1px solid ${styleColors.cloudyGray}` }}
              >
                <Box display="flex" alignItems="center" gap={{ sm: 1, md: 3 }}>
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
                  <NormalHeading>{convertUtil.toPriceString(item.unitPrice * item.quantity)}</NormalHeading>
                </Box>
              </Box>
              {rate && (
                <Stack display="flex" width="100%">
                  {rateList[index] ? (
                    previewRateIndex == index ? (
                      <Box width="100%">
                        <RateCard rate={rateList[index]} />
                        <SecondaryButton fullWidth onClick={(e) => setPreviewRateIndex(null)}>
                          Ẩn
                        </SecondaryButton>
                      </Box>
                    ) : (
                      <SecondaryButton onClick={(e) => setPreviewRateIndex(index)}>Xem Đánh Giá</SecondaryButton>
                    )
                  ) : (
                    <RateModal
                      disabled={purchase.orderStatus != 4}
                      order={{ purchaseOrderID: purchase.purchaseOrderID, shoesID: item.shoes.shoesID }}
                    />
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
              <NormalHeading>{status.purchaseStatus[purchase.orderStatus].toUpperCase()}</NormalHeading>
            </Box>
          </Stack>
          <Box>
            <FourthHeading textAlign={{xs: "left", sm: "right"}}>
              Tổng tiền:{" "}
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
