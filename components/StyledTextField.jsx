import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
const PrimaryInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${styleColors.black}`,
      borderRadius: "2px",
    },
  },
  "& .MuiInputBase-input": {
    height: "1rem",
  },
});

const NumberInput = styled(PrimaryInput)({
  "& input[type=number]": {
    "MozAppearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "WebkitAppearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "WebkitAppearance": "none",
    margin: 0,
  },
});

export default TextField;
export { PrimaryInput, NumberInput };
