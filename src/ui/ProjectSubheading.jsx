import styled, { css } from "styled-components";

const StyledSubHeading = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  width: 60%;
  font-weight: 500;

  @media only screen and (max-width: 50em) {
    width: 80%;
  }
  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
  @media only screen and (max-width: 31em) {
    text-align: center;
  }

  ${(props) =>
    props.$big &&
    css`
      width: 100%;
      @media only screen and (max-width: 50em) {
        width: 100%;
      }
    `}
  ${(props) =>
    props.$space &&
    css`
      margin-top: 5rem;
    `}
`;

export default StyledSubHeading;
