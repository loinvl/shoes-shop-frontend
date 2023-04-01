import { Card, CardContent, Typography } from "@mui/material";
import { SecondaryHeading } from "../StyledTypography";
export default function StyledCard({ content }) {
  return (
    <Card sx={{ width: "100%", height: "250px" }}>
      <CardContent>
        {content.icon}
        <SecondaryHeading>{content.title}</SecondaryHeading>
        {content.texts.map((text, index) => (
          <Typography key={index}>{text}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
