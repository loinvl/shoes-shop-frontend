import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const PrimaryHeading = styled(Typography)({
    fontWeight: "600",
    fontSize: "3em",
    "@media(min-width: 600px)":{
        fontSize: "4em"
    }
})

const SecondaryHeading = styled(Typography)({
    fontWeight: "400",
    fontSize: "2em",
    "@media(min-width: 600px)":{
        fontSize: "2.5em"
    }
})

const ThirdlyHeading = styled(Typography)({
    fontWeight: "400",
    fontSize: "1em",
    "@media(min-width: 600px)":{
        fontSize: "1.5em"
    }
})

export default Typography;
export {PrimaryHeading, SecondaryHeading, ThirdlyHeading};