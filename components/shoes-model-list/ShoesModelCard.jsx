import styleColors from "@/styles/styleColors";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { StyledImage } from "../layouts/StyledImage";

/* 
Shoes model card include:
    - shoes model name
    - brand
    - min price
*/

export default function ShoelModelCard({ content, width, height }) {
  return (
    <Card
      sx={{
        border: `1px solid ${styleColors.black}`,
        transition: "transform 0.2s ease-in-out",
        ":hover": { 
            border: `2px solid ${styleColors.blue}`, 
            transform: "scale(1.05)" },
      }}
    >
      <CardContent sx={{ textAlign: "center", padding: "15px" }}>
        <Box>
          <StyledImage width={width} height={height} src={content.imageLink} alt="shoes model" />
        </Box>
        <Typography mt={1} variant="h6" color={styleColors.cloudyGray}>
          {content.brandName}
        </Typography>
        <Typography mt={1} color={styleColors.black}>
          {content.shoesModelName}
        </Typography>
        <Typography mt={1} variant="h6" color={styleColors.black}>
          {content.minPrice}đ
        </Typography>
      </CardContent>
    </Card>
  );
}
