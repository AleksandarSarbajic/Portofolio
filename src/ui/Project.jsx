import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  transform: translateY(10%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s;
  ${(props) =>
    props.$delay &&
    css`
      transition: all 0.7s linear 0.3s;
      @media only screen and (max-width: 50em) {
        transition: all 0.7s linear;
      }
    `}
  ${(props) =>
    props.$inView === true &&
    css`
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}

  img {
    width: 100%;
  }
  h4 {
    margin: 1rem 0;
    font-size: 3.4rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.8;
    font-weight: 600;
    opacity: 0.8;
    @media only screen and (max-width: 50em) {
      width: 70%;
    }
    @media only screen and (max-width: 40em) {
      width: 90%;
    }
    @media only screen and (max-width: 31em) {
      width: 100%;
    }
  }
`;

function Project({ children, time }) {
  const { inView, ref } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <StyledBox ref={ref} $delay={time} $inView={inView}>
      {children}
    </StyledBox>
  );
}

export default Project;
