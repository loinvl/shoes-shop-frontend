import Banner from "@/components/home/Banner";
import { Container } from "@mui/material";
import Feedback from "@/components/home/Feedback";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import ShoesSample from "@/components/home/ShoesSample";

export default function Home() {
  return (
    <Container>
      <Banner/>
      <About/>
      <Feedback/>
      <ShoesSample/>
      <Contact/>
    </Container>
  );
}
