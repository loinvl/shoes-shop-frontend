import About from "@/components/about/About";
import AboutSlider from "@/components/about/AboutSlider";
import Contact from "@/components/contact/Contact";
import Question from "@/components/contact/Question";
import { Container } from "@mui/material";

export default function ContactPage() {
  return (
    <Container>
      <AboutSlider />
      <Question/>
      <Contact/>
    </Container>
  );
}
