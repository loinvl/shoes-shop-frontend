import { Box } from "@mui/material";
import ImageSlider from "../ImageSlider";
import CustomLink from "../CustomLink";
import { PrimaryButton } from "../StyledButton";

export default function AboutSlider() {
  const aboutImages = [
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
    <Box>
      <ImageSlider items={aboutImages} width="100%" height="300px">
        <CustomLink href="/shoes-model">
          <PrimaryButton size="large">Ủng Hộ Chúng Tôi</PrimaryButton>
        </CustomLink>
      </ImageSlider>
    </Box>
  );
}
