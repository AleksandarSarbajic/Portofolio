import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import StyledHeadingBox from "./HeadingBox";
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

const StyledBox = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0%, 1fr));
  gap: 10rem 15rem;
  @media only screen and (max-width: 62.5em) {
    gap: 10rem;
  }
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    transition: all 0.4s;
  }
  &:hover,
  &:active {
    color: var(--color-brand-600);
  }
  &:hover svg {
    color: var(--color-brand-600);
    transform: translateX(35%);
  }
  svg {
    font-size: 2.8rem;
    transition: all 0.4s;
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

      <StyledBox>
        <Project>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
        <Project time={true}>
          <img src="WildOasis.png" />
          <h4>The Wild Oasis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate consectetur sint nostrum numquam veniam!
          </p>
          <StyledLink to={"/"}>
            View Project <BsArrowRight />
          </StyledLink>
        </Project>
      </StyledBox>
    </StyledContainer>
  );
}

export default Projects;
