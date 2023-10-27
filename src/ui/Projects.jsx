import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

import { BsArrowRight } from "react-icons/bs";
import StyledHeadingBox from "./HeadingBox";
import StyledLink from "./StyledLink";
import ProjectBox from "./ProjectsBox";

const StyledContainer = styled.section`
  padding: 1rem;
  @media only screen and (max-width: 31em) {
    padding: 0;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.8rem;
  width: 50%;

  line-height: 1.8;
  margin-bottom: 5rem;

  @media only screen and (max-width: 50em) {
    text-align: center;
    margin: 0 auto 5.6rem;
    width: 75%;
    padding: 0;
  }
  @media only screen and (max-width: 37.5em) {
    width: 95%;
  }
  @media only screen and (max-width: 26.5em) {
    width: 100%;
  }
`;

function Projects() {
  const { inView: inViewHeading, ref: headingRef } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <StyledContainer>
      <StyledHeadingBox>
        <StyledHeading $inView={inViewHeading}>
          What I&apos;ve been working on
        </StyledHeading>
      </StyledHeadingBox>
      <StyledDescription ref={headingRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
        consequatur, voluptatem ratione inventore similique sunt laborum
        nesciunt, aspernatur magni autem. Exercitationem, dolore odit. Ullam
        dolorem officiis odit nemo quam.
      </StyledDescription>

      <ProjectBox>
        <Project>
          <img src="WildOasis.webp" />
          <h4>The Wild Oasis</h4>
          <p>
            The Wild Oasis is a user friendly hotel management application. That
            helps employees menage everything about hotel data.
          </p>
          <StyledLink to={"/es1"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img src="TastyTrail.webp" />
          <h4>Tasty Trail</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/es2"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project>
          <img src="WorldLanding.webp" />
          <h4>WorldWise</h4>
          <p>
            WorldWise is a React application that allows users to explore cities
            from around the world.
          </p>
          <StyledLink to={"/es3"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img src="FlixMovies.webp" />
          <h4>CreckFlix</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/es4"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </ProjectBox>
    </StyledContainer>
  );
}

export default Projects;
