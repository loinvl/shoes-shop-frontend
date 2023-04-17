import styleColors from "@/styles/styleColors";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { StyledImage } from "../StyledImage";
import defaultVariables from "@/utils/defaultValues";

/* 
Shoes model card include:
    - shoes model name
    - brand
    - min price
*/

export default function ShoelModelCard({ shoesModel, width }) {
  const minPrice = shoesModel.shoeses.reduce((prev, curr) => (prev.unitPrice < curr.unitPrice ? prev : curr)).unitPrice;
  const maxPrice = shoesModel.shoeses.reduce((prev, curr) => (prev.unitPrice >= curr.unitPrice ? prev : curr)).unitPrice;
  
  return (
    <Card
      sx={{
        border: `1px solid ${styleColors.black}`,
        transition: "transform 0.2s ease-in-out",
        ":hover": {
          border: `2px solid ${styleColors.blue}`,
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center", padding: "15px" }}>
        <Stack gap={1}>
          <Box sx={{ width: width, height: "auto", aspectRatio: "1/1" }}>
            <StyledImage
              width="100%"
              height="100%"
              src={shoesModel.images[0].imageLink || defaultVariables.shoesModelImageLink}
              alt="shoes model"
            />
          </Box>
          <Box>
            <Typography variant="h6" color={styleColors.cloudyGray}>
              {shoesModel.brand.brandName}
            </Typography>
          </Box>
          <Box height="6rem" overflow="hidden">
            <Typography color={styleColors.black}>{shoesModel.shoesModelName}</Typography>
          </Box>
          <Box>
            <Typography fontWeight="600" color={styleColors.black}>
              {minPrice == maxPrice ? minPrice : `${minPrice}đ - ${maxPrice}`}đ
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
