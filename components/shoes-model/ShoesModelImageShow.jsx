import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { StyledImage } from "../layouts/StyledImage";
import styleColors from "@/styles/styleColors";
import defaultVariables from "@/utils/defaultValues";

export default function ShoesModelImageShow({ images, width }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainer = useRef(null);

  const handleImageChoice = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePreButton = () => {
    // choose pre image
    const newImageIndex = currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newImageIndex);

    // scroll to image that was choisen
    const scrollPosition = (imageContainer.current.offsetWidth / (images.length - 1)) * newImageIndex;
    imageContainer.current.scrollLeft = scrollPosition;
  };

  const handleNextButton = () => {
    // choose next image
    const newImageIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newImageIndex);

    // scroll to image that was chosen
    const scrollPosition = (imageContainer.current.offsetWidth / (images.length - 1)) * newImageIndex;
    imageContainer.current.scrollLeft = scrollPosition;
  };

  return (
    images && (
      <Box>
        <Box sx={{ width: { width }, height: "auto", aspectRatio: "1/1" }}>
          <StyledImage
            src={images[currentImageIndex]?.imageLink || defaultVariables.shoesModelImageLink}
            alt="shoes"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: { width },
            height: "auto",
            aspectRatio: "4/1",
            position: "relative",
          }}
        >
          <Box position="absolute" left="0%" top="50%" sx={{ transform: "translateY(-50%)" }}>
            <IconButton sx={{ color: styleColors.black }} onClick={handlePreButton}>
              <ArrowBackIos />
            </IconButton>
          </Box>
          <Box ref={imageContainer} display="flex" gap={2} width="100%" height="100%" overflow="hidden">
            {images.map((image, index) => (
              <Box
                key={index}
                border={index == currentImageIndex ? `1px solid ${styleColors.blue}` : "none"}
                borderRadius={index == currentImageIndex ? "1em" : "none"}
                sx={{
                  width: "auto",
                  height: "100%",
                  aspectRatio: "1/1",
                  ":hover": { cursor: "pointer", border: `1px solid ${styleColors.blue}`, borderRadius: "1em" },
                }}
              >
                <StyledImage
                  src={image?.imageLink || defaultVariables.shoesModelImageLink}
                  alt="shoes"
                  width="100%"
                  height="100%"
                  onClick={(e) => handleImageChoice(index)}
                />
              </Box>
            ))}
          </Box>
          <Box position="absolute" right="0%" top="50%" sx={{ transform: "translateY(-50%)" }}>
            <IconButton sx={{ color: styleColors.black }} onClick={handleNextButton}>
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>
      </Box>
    )
  );
}
