import About from "@/components/about/About";
import AboutSlider from "@/components/about/AboutSlider";
import Feature from "@/components/about/Feature";
import Contact from "@/components/contact/Contact";
import Feedback from "@/components/home/Feedback";
import { Container } from "@mui/material";

export default function AboutPage() {
  return (
    <Container>
      <AboutSlider />
      <About />
      <Feature/>
      <Feedback/>
      <Contact/>
    </Container>
  );
}
