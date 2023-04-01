import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)({
    color: styleColors.white,
    backgroundColor: styleColors.black,
    ":hover" : {
        color: styleColors.metalGray,
        backgroundColor: styleColors.white,
        outline: `1px solid ${styleColors.metalGray}`
    }
})

const SecondaryButton = styled(Button)({
    color: styleColors.metalGray,
    backgroundColor: styleColors.white,
    outline: `1px solid ${styleColors.metalGray}`,
    ":hover" : {
        color: styleColors.white,
        backgroundColor: styleColors.black,
        outline: `1px solid ${styleColors.metalGray}`
    }
})

export default Button;
export {PrimaryButton, SecondaryButton};