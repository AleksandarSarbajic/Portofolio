import styled from "styled-components";

const StyledHero = styled.div`
  padding: 10rem 0;
  display: grid;
  grid-template-columns: 50% 40%;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  font-size: 5.4rem;

  line-height: 1.1;
  /* letter-spacing: 5px; */
  font-weight: 700;

  transition: all 1s;
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
`;

function Hero() {
  return (
    <StyledHero>
      <StyledHeading>
        Hi there, I&apos;m Aleksandar. Front End{" "}
        <StyledSpan>Developer</StyledSpan>, crafting beautiful web applications.
      </StyledHeading>
      <StyledImage src="/public/hero_image.webp"></StyledImage>
    </StyledHero>
  );
}

export default Hero;
