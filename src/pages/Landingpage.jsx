import UseEasterEgg from "../hooks/UseEasterEgg";
import useScrollToTop from "../hooks/UseScrollToTop";
import AboutMe from "../ui/AboutMe";
import Contact from "../ui/Contact";
import Hero from "../ui/Hero";
import Projects from "../ui/Projects";
import Skills from "../ui/Skills";

function Landingpage() {
  UseEasterEgg();
  useScrollToTop();
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Landingpage;
