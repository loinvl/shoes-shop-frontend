import { Card, CardContent, Typography } from "@mui/material";
import { SecondaryHeading } from "../StyledTypography";
export default function ContactCard({ content, width, height }) {
  return (
    <Card sx={{ width: width, height: height }}>
      <CardContent>
        {content.icon}
        <SecondaryHeading>{content.title}</SecondaryHeading>
        {content.texts.map((text, index) => (
          <Typography noWrap key={index}>{text}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
