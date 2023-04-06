import ShoesModelDesciption from "@/components/shoes-model/ShoesModelDescription";
import ShoesModelImageShow from "@/components/shoes-model/ShoesModelImageShow";
import ShoesModelInfo from "@/components/shoes-model/ShoesModelInfo";
import ShoesModelRate from "@/components/shoes-model/ShoesModelRate";
import { Box, Container } from "@mui/material";

export default function ShoesModelPage() {
  const images = [
    "/image/shoes-sample1.webp",
    "/image/shoes-sample2.webp",
    "/image/shoes-sample3.webp",
    "/image/shoes-sample4.webp",
    "/image/shoes-sample5.webp",
    "/image/shoes-sample6.webp",
    "/image/shoes-sample7.webp",
    "/image/shoes-sample8.webp",
  ];

  const info = {
    shoelModelName: "Giày MC Queen gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    brandName: "NIKE",
    shoeses: [
      {
        shoesID: 1,
        color: "Trắng",
        size: 38,
        unitPrice: 500,
        quantity: 10,
      },
      {
        shoesID: 2,
        color: "Đen",
        size: 39,
        unitPrice: 800,
        quantity: 5,
      },
      {
        shoesID: 3,
        color: "Xanh",
        size: 40,
        unitPrice: 300,
        quantity: 0,
      },
    ],
  };

  return (
    <Container>
      <Box>
        <Box display="flex" gap={3}>
          <Box flex={2}>
            <ShoesModelImageShow images={images} width="100%" />
          </Box>
          <Box flex={3}>
            <ShoesModelInfo info={info}/>
          </Box>
        </Box>
        <Box>
          <ShoesModelDesciption />
        </Box>
        <Box>
          <ShoesModelRate />
        </Box>
      </Box>
    </Container>
  );
}
