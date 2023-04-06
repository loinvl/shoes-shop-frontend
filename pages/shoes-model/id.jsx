import ShoesModelDesciption from "@/components/shoes-model/ShoesModelDescription";
import ShoesModelImageShow from "@/components/shoes-model/ShoesModelImageShow";
import ShoesModelInfo from "@/components/shoes-model/ShoesModelInfo";
import ShoesModelRate from "@/components/shoes-model/ShoesModelRate";
import { Box, Container, Divider, Stack } from "@mui/material";

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

  const description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\nNunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.";

  const rateList = [
    {
        shoes: {
            shoesID: 30,
            color: "Xanh",
            size: 40,
        },
        customer: {
            customerID: 3,
            customerName: "Nguyễn Văn C",
        },
        rateStar: 4,
        content: "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'",
        "rateTime": "2023-03-25T00:03:35",
        imageLink: '/image/shoes-sample1.webp'
    },
    {
        shoes: {
            shoesID: 30,
            color: "Xanh",
            size: 40,
        },
        customer: {
            customerID: 3,
            customerName: "Nguyễn Văn C",
        },
        rateStar: 4,
        content: "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'",
        "rateTime": "2023-03-25T00:03:35",
        imageLink: null
    },
    {
        shoes: {
            shoesID: 30,
            color: "Xanh",
            size: 40,
        },
        customer: {
            customerID: 3,
            customerName: "Nguyễn Văn C",
        },
        rateStar: 4,
        content: "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'",
        "rateTime": "2023-03-25T00:03:35",
        imageLink: '/image/shoes-sample2.webp'
    },
    {
        shoes: {
            shoesID: 30,
            color: "Xanh",
            size: 40,
        },
        customer: {
            customerID: 3,
            customerName: "Nguyễn Văn C",
        },
        rateStar: 4,
        content: "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'",
        "rateTime": "2023-03-25T00:03:35",
        imageLink: null
    },
    {
        shoes: {
            shoesID: 30,
            color: "Xanh",
            size: 40,
        },
        customer: {
            customerID: 3,
            customerName: "Nguyễn Văn C",
        },
        rateStar: 4,
        content: "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'",
        "rateTime": "2023-03-25T00:03:35",
        imageLink: '/image/shoes-sample3.webp'
    },
  ]
  return (
    <Container>
      <Stack gap={5} mb={5}>
        <Box display="flex" flexDirection={{xs: "column", md: "row"}} gap={3}>
          <Box flex={2}>
            <ShoesModelImageShow images={images} width="100%" />
          </Box>
          <Box flex={3}>
            <ShoesModelInfo info={info}/>
          </Box>
        </Box>
        <Divider/>
        <Box px={{sm: 5, md: 15}}>
          <ShoesModelDesciption description={description}/>
        </Box>
        <Divider/>
        <Box px={{sm: 5, md: 15}}>
          <ShoesModelRate px={20} rates={rateList}/>
        </Box>
      </Stack>
    </Container>
  );
}
