import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const PrimaryHeading = styled(Typography)({
  fontWeight: "900",
  fontSize: "2.6em",
  "@media(min-width: 600px)": {
    fontSize: "3.0em",
  },
});

const SecondaryHeading = styled(Typography)({
    fontWeight: "900",
    fontSize: "2.0em",
    "@media(min-width: 600px)": {
      fontSize: "2.2em",
    },
});

const ThirdHeading = styled(Typography)({
    fontWeight: "700",
    fontSize: "1.4em",
    "@media(min-width: 600px)": {
      fontSize: "1.6em",
    },
});

const FourthHeading = styled(Typography)({
  fontWeight: "700",
  fontSize: "1.2em",
});

const NormalHeading = styled(Typography)({
  fontWeight: "700",
  fontSize: "1em",
});

const ErrorText = styled(Typography)({
  color: styleColors.red,
  fontSize: "0.8em",
});

export default Typography;
export { PrimaryHeading, SecondaryHeading, ThirdHeading, FourthHeading, NormalHeading, ErrorText };
