import styleColors from "@/styles/styleColors";
import { Star } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function StarAmount({ star }) {
  let starAmount = [];
  for (let i = 0; i < 5; i++) {
    if (i < star) {
      starAmount.push(<Star key={i} sx={{ color: styleColors.icon.star }} />);
    } else {
      starAmount.push(<Star key={i} sx={{ color: styleColors.gray.medium }}/>);
    }
  }

  return <Stack direction="row">{...starAmount}</Stack>;
}
