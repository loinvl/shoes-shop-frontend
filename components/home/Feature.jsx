import { Box } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import { Home } from "@mui/icons-material";
import StyledCard from "./ContactCard";
import styleColors from "@/styles/styleColors";

export default function Feature() {
  const content = {
    icon: <Home sx={{ fontSize: "5em" }} />,
    title: "this is title",
    texts: ["flskfj sjfksljfksjklf jlslk", "fsfsfsfs"],
  };

  return (
    <Box py={10} textAlign="center" borderRadius="10px" sx={{backgroundColor: styleColors.fogGray}}>
      <PrimaryHeading color={styleColors.metalGray}>Thanh Toán</PrimaryHeading>
      <Box pt={5} display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={5}>
        <StyledCard key={content.title} content={content} />
        <StyledCard key={content.title} content={content} />
        <StyledCard key={content.title} content={content} />
      </Box>
    </Box>
  );
}
