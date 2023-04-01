import Banner from "@/components/home/Banner";
import { Container } from "@mui/material";
import Feedback from "@/components/home/Feedback";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ShoesSample from "@/components/home/ShoesSample";

export default function HomePage() {
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
