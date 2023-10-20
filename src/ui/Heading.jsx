import styled, { css } from "styled-components";

const StyledHeading = styled.h3`
  font-size: 4rem;
  margin-bottom: 5rem;
  padding-left: 3rem;
  transform: translateX(-6%);
  opacity: 0;
  visibility: hidden;
  transition: all 1s;
  position: relative;

  @media only screen and (max-width: 50em) {
    text-align: center;
    padding: 0;
    font-size: 4.8rem;
  }

  ${(props) =>
    props.$inView === true &&
    css`
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    `}

  &::after {
    ${(props) =>
      props.$aboutMe === true &&
      css`
        display: block;
        content: "";
        position: absolute;
        bottom: -1.5rem;
        left: 2rem;
        height: 45%;
        width: 18rem;
        z-index: -1;
        opacity: 0.7;
        transform: scale(1.07, 1.05) skewX(-15deg);
        background-image: linear-gradient(
          to top left,
          var(--color-brand-300),
          var(--color-brand-700)
        );

        @media only screen and (max-width: 50em) {
          width: 24rem;
          left: 50%;
          transform: scale(1.07, 1.05) skewX(-15deg) translate(-47.5%);
        }
      `}
  }
`;

export default StyledHeading;
