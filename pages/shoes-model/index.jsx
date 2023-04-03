import ShoesModelGrid from "@/components/shoes-model/ShoesModelGrid";
import SideBar from "@/components/shoes-model/SideBar";
import TopBar from "@/components/shoes-model/TopBar";
import { Box, Container, Pagination, Stack } from "@mui/material";

export default function ShoesModel() {
  return (
    <Container>
      <Box my={5} display="flex" gap={5}>
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={3}>
          <Box>
            <TopBar />
          </Box>
          <Box>
            <ShoesModelGrid />
          </Box>
          <Stack alignItems="center">
            <Pagination count={5} variant="outlined" size="large"/>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
