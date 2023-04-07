import ShoesModelGrid from "@/components/shoes-model-list/ShoesModelGrid";
import SideBar from "@/components/shoes-model-list/SideBar";
import TopBar from "@/components/shoes-model-list/TopBar";
import { Box, Container, Pagination, Stack } from "@mui/material";

export default function ShoesModelListPage() {
  return (
    <Container>
      <Box mt={{sm: 3}} mb={10} display="flex" flexDirection={{xs:"column", sm: "row"}} gap={2}>
        <Box flex={1}>
          <SideBar />
        </Box>
        <Box flex={3}>
          <Box>
            <TopBar />
          </Box>
          <Box mt={5}>
            <ShoesModelGrid />
          </Box>
          <Stack mt={5} alignItems="center">
            <Pagination count={5} variant="outlined" size="large"/>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
