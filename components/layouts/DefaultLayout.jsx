import { Container } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
