import { PrimaryButton } from "@/components/StyledButton";
import PurchaseInfo from "@/components/checkout/PurchaseInfo";
import PurchaseOrder from "@/components/checkout/PurchaseOrder";
import { Box, Container, Typography } from "@mui/material";

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

export default function CheckoutPage() {
  return (
    <Container>
      <Box mt={3} mb={5}>
        <Box>
          <Typography variant="h4" fontWeight="600" textAlign="center">
            ĐẶT HÀNG
          </Typography>
        </Box>
        <Box my={2}>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={5}>
            <Box flex={1}>
              <PurchaseInfo />
            </Box>
            <Box flex={1}>
              <PurchaseOrder orders={orders}/>
            </Box>
          </Box>
        </Box>
        <Box>
          <PrimaryButton size="large" fullWidth>
            Đặt Hàng
          </PrimaryButton>
        </Box>
      </Box>
    </Container>
  );
}
