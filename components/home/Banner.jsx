import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import CustomLink from "../CustomLink";
import styleColors from "@/styles/styleColors";

const BannerImage = styled("img")({
  width: "100%",
  height: "60vh",
  objectFit: "cover",
});

export default function Banner() {
  const items = [
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

  return (
    <Box borderRadius="1em" overflow="hidden">
      <Carousel 
        indicatorContainerProps={{style: {position: "absolute", bottom: "2%", zIndex: 1}}}
        indicatorIconButtonProps={{style:{padding: 5, color: styleColors.white}}}
        activeIndicatorIconButtonProps ={{style:{color: styleColors.black}}}>
        {items.map((item, index) => (
          <Box position="relative" key={index}>
            <BannerImage src={item.src} alt={item.alt} />
            <Box
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CustomLink href="/shoes-model">
                <PrimaryButton sx={{ width: "200px" }}>Mua Ngay</PrimaryButton>
              </CustomLink>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
