import Banner from "@/components/home/Banner";
import { Container } from "@mui/material";
import About from "./about";
import Contact from "./contact";
import Feature from "@/components/home/Feature";
import Feedback from "@/components/home/Feedback";

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
