import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledImg = styled.img`
  transform: translateY(5%);

  opacity: 0;
  visibility: hidden;
  transition: all 1s;

  ${(props) =>
    props.$delay &&
    css`
      transition: all 1s linear 0.3s;
    `}

  ${(props) =>
    props.$inView &&
    css`
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
    `}

    @media only screen and (max-width: 50em) {
    grid-column: 1 / 2 !important;
  }
`;

function StyledBoxImage({ src, alt, delay, style }) {
  const { inView, ref } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <StyledImg
      $delay={delay}
      style={style}
      $inView={inView}
      ref={ref}
      src={src}
      alt={alt}
    />
  );
}

export default StyledBoxImage;
