import styled, { keyframes } from "styled-components";

const headingAnimation = keyframes`
0%{transform: translateX(-50%); opacity:0;}
40%{opacity:0; }
100%{ transform:translateX(0%)}
`;
const imageAnimation = keyframes`
0%{ opacity:0;}
40%{opacity:0; }
100%{ opacity:1;}
`;

const StyledHero = styled.div`
  padding: 10rem 1rem;
  display: grid;
  grid-template-columns: 55% 40%;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 62.5em) {
    padding: 10rem 0;
  }
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

const StyledHeading = styled.h1`
  font-size: 5.4rem;

  line-height: 1.1;
  /* letter-spacing: 5px; */
  font-weight: 700;
  animation: ${headingAnimation} 1s ease;

  transition: color 1s;
  @media only screen and (max-width: 50em) {
    text-align: center;
    padding: 0 3%;
  }
  @media only screen and (max-width: 40em) {
    padding: 0;
  }
  @media only screen and (max-width: 31em) {
    font-size: 5rem;
  }
`;

const StyledSpan = styled.span`
  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.7;
    transform: scale(1.07, 1.05) skewX(-15deg);
    background-image: linear-gradient(
      to top left,
      var(--color-brand-500),
      var(--color-brand-700)
    );
  }
`;

const StyledImage = styled.img`
  width: 100%;
  animation: ${imageAnimation} 1.5s ease;

  @media only screen and (max-width: 50em) {
    width: 60%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 26.5em) {
    width: 75%;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <StyledHeading>
        Hi there, I&apos;m Aleksandar. Front End{" "}
        <StyledSpan>Developer</StyledSpan>, crafting beautiful web applications.
      </StyledHeading>
      <StyledImage src="hero_image.webp"></StyledImage>
    </StyledHero>
  );
}

export default Hero;
