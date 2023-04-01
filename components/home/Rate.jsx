import styleColors from "@/styles/styleColors";
import { Avatar, Box, Typography } from "@mui/material";

export default function Rate({ rate }) {
  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar alt="avatar" src={rate.avatar} />
        <Typography variant="h6" color={styleColors.metalGray}>
          {rate.name}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography>"{rate.content}"</Typography>
      </Box>
    </Box>
  );
}
