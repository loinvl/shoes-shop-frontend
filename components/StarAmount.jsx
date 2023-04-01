import styleColors from "@/styles/styleColors";
import { Star } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default function StarAmount({ star }) {
  let starAmount = [];
  for (let i = 0; i < 5; i++) {
    if (i < star) {
      starAmount.push(<Star key={i} sx={{ color: styleColors.yellow }} />);
    } else {
      starAmount.push(<Star key={i} sx={{ color: styleColors.cloudyGray }}/>);
    }
  }

  return <Stack direction="row">{...starAmount}</Stack>;
}
