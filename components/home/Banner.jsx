import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import CustomLink from "../CustomLink";
import styleColors from "@/styles/styleColors";
import ImageSlider from "../ImageSlider";

export default function Banner() {
  const banners = [
    {
      src: "/banner/banner1.webp",
      alt: "banner",
    },
    {
      src: "/banner/banner2.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner3.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner4.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner5.jpg",
      alt: "banner",
    },
  ];

  const smallBanners1 = [
    {
      src: "/banner/banner6.png",
      alt: "banner",
    },
    {
      src: "/banner/banner7.png",
      alt: "banner",
    },
    {
      src: "/banner/banner8.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner9.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner10.jpg",
      alt: "banner",
    },
  ];
  const smallBanners2 = [
    {
      src: "/banner/banner7.png",
      alt: "banner",
    },
    {
      src: "/banner/banner8.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner9.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner10.jpg",
      alt: "banner",
    },
    {
      src: "/banner/banner6.png",
      alt: "banner",
    },
  ];

  return (
    <Box display="flex" gap={1}>
      <Box flex={2}>
        <ImageSlider items={banners} width="100%" height="300px">
          <CustomLink href="/shoes-model">
            <PrimaryButton sx={{ width: "200px" }}>Mua Ngay</PrimaryButton>
          </CustomLink>
        </ImageSlider>
      </Box>
      <Box flex={1} display={{xs: "none", sm: "flex"}} flexDirection="column" justifyContent="space-between">
        <ImageSlider items={smallBanners1} width="100%" height="145px">
          <CustomLink href="/shoes-model">
            <SecondaryButton>Khám Phá</SecondaryButton>
          </CustomLink>
        </ImageSlider>
        <ImageSlider items={smallBanners2} width="100%" height="145px">
          <CustomLink href="/shoes-model">
            <SecondaryButton>Trải Nghiệm</SecondaryButton>
          </CustomLink>
        </ImageSlider>
      </Box>
    </Box>
  );
}
