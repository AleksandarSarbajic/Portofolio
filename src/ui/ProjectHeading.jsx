import styled, { css } from "styled-components";

const StyledProjectHeading = styled.h2`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  ${(props) =>
    props.$small &&
    css`
      font-weight: 800;
      margin-top: 0rem;
      margin-bottom: 5rem;
      font-size: 3.4rem;
      display: block;
      @media only screen and (max-width: 31em) {
        text-align: center;
      }
    `}

  ${(props) =>
    props.$margin &&
    css`
      margin-top: 15rem;
    `}
  ${(props) =>
    props.$medium &&
    css`
      display: block;
      margin-top: 20rem;
      margin-bottom: 10rem;
      font-size: 4.4rem;
      @media only screen and (max-width: 31em) {
        text-align: center;
      }
    `}



  ${(props) =>
    !props.$small && !props.$medium
      ? css`
  
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    height: 40%;
    width: 100%;
    z-index: -1;
    opacity: 0.7;
    transform: scale(1.07, 1.05) skewX(-15deg);
    background-image: linear-gradient(
      to top left,
      var(--color-brand-300),
      var(--color-brand-700)
    );
  
  `
      : ""}
`;

export default StyledProjectHeading;
