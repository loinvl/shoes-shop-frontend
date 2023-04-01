import Banner from "@/components/home/Banner";
import { Container } from "@mui/material";
import Feature from "@/components/home/Feature";
import Feedback from "@/components/home/Feedback";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <Container>
      <Banner/>
      <About/>
      <Feedback/>
      <Contact/>
      <Feature/>
    </Container>
  );
}
