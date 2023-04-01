import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
const PrimaryInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `1px solid ${styleColors.black}`,
            borderRadius: '2px',
          },
    },
    '& .MuiInputBase-input': {
        height: '1rem'
      },
})
export default TextField;
export {PrimaryInput};