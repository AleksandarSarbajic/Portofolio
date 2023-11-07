import useScrollToTop from "../hooks/UseScrollToTop";
import AboutMe from "../ui/AboutMe";
import Contact from "../ui/Contact";
import Hero from "../ui/Hero";
import Projects from "../ui/Projects";
import Skills from "../ui/Skills";

function Landingpage() {
  console.log(`
##     ## ####    ######## ##     ## ######## ########  ########
##     ##  ##        ##    ##     ## ##       ##     ## ##      
##     ##  ##        ##    ##     ## ##       ##     ## ##      
#########  ##        ##    ######### ######   ########  ######  
##     ##  ##        ##    ##     ## ##       ##   ##   ##      
##     ##  ##        ##    ##     ## ##       ##    ##  ##      
##     ## ####       ##    ##     ## ######## ##     ## ########`);
  console.log(`I'm glad that you are here!`);
  console.log("Desing and code created by Aleksandar Sarbajic");
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
