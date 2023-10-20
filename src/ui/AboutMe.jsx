import styled from "styled-components";
import StyledHeading from "./Heading";
import { useInView } from "react-intersection-observer";

const StyledContainer = styled.div`
  margin-top: 12rem;
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  @media only screen and (max-width: 50em) {
    font-size: 2rem;
  }
`;

const StyledBox = styled.div`
  padding-left: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 0.45fr);
  justify-content: space-between;
  gap: 3rem 0;
  @media only screen and (max-width: 50em) {
    padding: 0;
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
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <StyledContainer>
      <StyledHeading $inView={headingInView} $aboutMe={true}>
        About Me
      </StyledHeading>
      <StyledBox ref={headingRef}>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
        <StyledText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          reprehenderit quisquam animi id voluptatem atque aperiam in voluptatum
          deserunt beatae. Asperiores ducimus doloremque neque ipsa consequuntur
          labore a excepturi commodi?
        </StyledText>
      </StyledBox>
    </StyledContainer>
  );
}

export default AboutMe;
