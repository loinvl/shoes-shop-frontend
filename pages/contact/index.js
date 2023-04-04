import About from "@/components/about/About";
import AboutSlider from "@/components/about/AboutSlider";
import Contact from "@/components/contact/Contact";
import Question from "@/components/contact/Question";
import { Box, Container } from "@mui/material";

export default function ContactPage() {
  return (
    <Container>
      <AboutSlider />
      <Box mt={5}>
        <Question />
      </Box>
      <Contact />
    </Container>
  );
}
