import styleColors from "@/styles/styleColors";
import styled from "@emotion/styled";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: styleColors.white,
    backgroundColor: styleColors.secondary,
  },
});

export default StyledBadge;
