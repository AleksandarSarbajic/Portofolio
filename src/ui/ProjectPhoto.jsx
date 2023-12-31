import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const StyledProjectImg = styled.img`
  box-shadow: var(--shadow-img);
  border-radius: var(--border-radius-lg);
  width: 100%;

  transform: translateY(5%);

  opacity: 0;
  visibility: hidden;
  transition: all 1s;
  ${(props) =>
    props.$inView &&
    css`
      transform: translateY(0%);
      opacity: 1;
      visibility: visible;
    `}
`;

function StyledProjectImage({ src, alt }) {
  const { inView, ref } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return <StyledProjectImg $inView={inView} ref={ref} src={src} alt={alt} />;
}

export default StyledProjectImage;
