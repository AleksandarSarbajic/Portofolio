import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";
import StyledHeadingBox from "./HeadingBox";
import useScrollTo from "../hooks/UseScrollTo";

import { useIsInView } from "../context/IsInViewContext";
import { useEffect } from "react";

const StyledContainer = styled.section`
  margin-bottom: 15.6rem;
  padding: 0 1rem;
  @media only screen and (max-width: 50em) {
    padding: 0;
  }
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;

  @media only screen and (max-width: 50em) {
    font-size: 2rem;
  }
`;

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.45fr);
  justify-content: space-between;
  gap: 3rem 0;
  @media only screen and (max-width: 50em) {
    grid-template-columns: 0.6fr;
    justify-content: center;
    text-align: center;
  }
  @media only screen and (max-width: 42.5em) {
    grid-template-columns: 0.9fr;
  }
  @media only screen and (max-width: 26.5em) {
    grid-template-columns: 1fr;
  }
`;

function AboutMe() {
  const { ref: intRef, inView: intInView } = useInView();

  const { setSectionHandler } = useIsInView();

  useEffect(() => {
    const { pageYOffset } = window;
   
    if (intInView && pageYOffset > 50) {
      setSectionHandler("#aboutme");
    }
  }, [intInView, setSectionHandler]);

  const { ref: containerRef } = useScrollTo({
    hash: "#aboutme",
    scrollTo: "center",
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <StyledContainer ref={containerRef}>
      <StyledHeadingBox ref={intRef}>
        <StyledHeading $inView={headingInView} $aboutMe={true}>
          About Me
        </StyledHeading>
      </StyledHeadingBox>
      <StyledBox ref={headingRef}>
        <StyledText>
          I&apos;m a 21-year-old introvert who found peace of mind in writing
          code.
        </StyledText>
        <StyledText>
          Years later, I had a whole summer free for myself and decided to try
          learning HTML and CSS. The learning experience was radically different
          from high school because I loved creating something that was
          accessible to everyone on the web.
        </StyledText>
        <StyledText>
          My first experience with programming was when I was 16, but I
          didn&apos;t last long: I was a big fan of gaming and I enjoyed more
          playing games. Once in a class we started doing basic c and right
          after c++, and it was totally inscrutable to me.
        </StyledText>
        <StyledText>
          Since then, I&apos;ve been honing my skills and studying JavaScript
          with other third-party libraries. When I&apos;m not programming, I
          like to work out in the gym. My aim is to assist a company in
          constructing enjoyable products and accomplishing their goals.
        </StyledText>
      </StyledBox>
    </StyledContainer>
  );
}

export default AboutMe;
