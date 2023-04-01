import { Box } from "@mui/material";
import { PrimaryHeading } from "../StyledTypography";
import styleColors from "@/styles/styleColors";
import StyledCard from "./StyledCard";
import { Home } from "@mui/icons-material";

export default function Contact(){
    const content =
        {
            icon: <Home sx={{fontSize: "5em"}}/>,
            title: "this is title",
            texts: ["flskfj sjfksljfksjklf jlslk", "fsfsfsfs"]
        }
    return (
    <Box py={10} textAlign="center">
        <PrimaryHeading color={styleColors.metalGray}>Liên Hệ</PrimaryHeading>
        <Box pt={5} display="flex" flexDirection={{xs: "column", md: "row"}} justifyContent="space-between" gap={5}>
            <StyledCard key={content.title} content={content}/>
            <StyledCard key={content.title} content={content}/>
            <StyledCard key={content.title} content={content}/>
        </Box>
    </Box>)
}