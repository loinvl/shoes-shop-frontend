import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styleColors from "@/styles/styleColors";
import { StyledImage } from "./layouts/StyledImage";

export default function ImageSlider({items, width, height, children}) {
  return (
    <Box>
      <Carousel 
        sx={{width: width, height: height}}
        indicatorContainerProps={{style: {position: "absolute", bottom: "2%", zIndex: 1}}}
        indicatorIconButtonProps={{style:{padding: 5, color: styleColors.white}}}
        activeIndicatorIconButtonProps ={{style:{color: styleColors.black}}}>
        {items.map((item, index) => (
          <Box position="relative" key={index}>
            <StyledImage src={item.src} alt={item.alt} width={width} height={height}/>
            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {children}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
