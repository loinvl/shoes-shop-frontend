import { Box, Divider } from "@mui/material";
import ImageSlider from "./ImageSlider";
import CustomLink from "../CustomLink";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import styleColors from "@/styles/styleColors";
import { PrimaryHeading } from "../StyledTypography";

export default function ShoesSample() {
  const primaryShoesSamples = [
    {
      src: "/image/shoes-sample1.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample2.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample3.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample4.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample5.webp",
      alt: "shoes sample",
    },
  ];
  const secondaryShoesSamples = [
    {
      src: "/image/shoes-sample6.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample7.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample8.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample9.webp",
      alt: "shoes sample",
    },
    {
      src: "/image/shoes-sample10.webp",
      alt: "shoes sample",
    },
  ];
  return (
    <Box py={10} px={{sm: 5, md: 10}} textAlign="center">
      <PrimaryHeading color={styleColors.black}>Mẫu Giày</PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={5}>
        <Box flex={1}>
          <ImageSlider items={primaryShoesSamples} width="100%" height="250px">
            <CustomLink href="/shoes-model">
              <PrimaryButton sx={{ width: "200px" }}>Xem Ngay</PrimaryButton>
            </CustomLink>
          </ImageSlider>
        </Box>
        <Divider/>
        <Box flex={1}>
          <ImageSlider items={secondaryShoesSamples} width="100%" height="250px">
            <CustomLink href="/shoes-model">
              <SecondaryButton sx={{ width: "200px" }}>Xem Ngay</SecondaryButton>
            </CustomLink>
          </ImageSlider>
        </Box>
      </Box>
    </Box>
  );
}
