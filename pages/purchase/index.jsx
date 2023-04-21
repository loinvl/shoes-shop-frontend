import purchaseAPI from "@/backendAPI/purchaseAPI";
import CustomLink from "@/components/CustomLink";
import { ThirdHeading } from "@/components/StyledTypography";
import IsLogin from "@/components/hoc/IsLogin";
import PurchaseCard from "@/components/purchase/PurchaseCard";
import styleColors from "@/styles/styleColors";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

/* mock data
const purchaseList = [
    {
      orderTime: "00:00 01/01/2023",
      orderStatus: "Đang giao",
      orderDetail: [
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
        },
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
          orderStatus: "Đang giao",
          orderTime: "00:00 01/01/2023",
        },
      ],
    },
    {
      orderTime: "00:00 01/01/2023",
      orderStatus: "Đang giao",
      orderDetail: [
        {
          shoesModelName:
            "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
          quantity: 5,
          color: "Xanh",
          size: 38,
          unitPrice: 500000,
          imageLink: "/image/shoes-sample1.webp",
        },
      ],
    },
  ];

*/
export default function PurchasePage() {
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    (async () => {
      // call api to get purchase order list
      const res = await purchaseAPI.getPurchaseList();

      // handle error res
      if (!res.success) {
        return;
      }

      // handle success res
      console.log(res.data.purchaseOrderList);
      setPurchaseList(res.data.purchaseOrderList);
    })();
  }, []);
  return (
    <IsLogin>
      <Container>
        <Box mb={5}>
          <Box>
            <ThirdHeading textAlign="center">
              ĐƠN HÀNG
            </ThirdHeading>
          </Box>
          <Stack gap={2}>
            {purchaseList.length == 0 ? (
              <Stack alignItems="center">Trống! Hãy lựa giày thôi nào.</Stack>
            ) : (
              purchaseList.map((purchase, index) => (
                <Box key={index}>
                  <CustomLink href={`/purchase/${purchase.purchaseOrderID}`}>
                    <Card sx={{ border: `1px solid ${styleColors.gray.medium}`, borderRadius: "0.5em", backgroundColor: styleColors.gray.light }}>
                      <CardContent>
                        <PurchaseCard purchase={purchase} />
                      </CardContent>
                    </Card>
                  </CustomLink>
                </Box>
              ))
            )}
          </Stack>
        </Box>
      </Container>
    </IsLogin>
  );
}
