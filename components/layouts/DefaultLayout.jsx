import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Box height="100px">
        <Box position="fixed" zIndex={100} width="100%">
          <Header />
        </Box>
      </Box>
      {children}
      <Footer />
    </>
  );
}
