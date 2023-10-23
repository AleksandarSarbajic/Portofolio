import styled, { css } from "styled-components";

const StyledHeadingBox = styled.div`
  @media only screen and (max-width: 50em) {
    ${(props) =>
      !props.$project &&
      css`
        text-align: center;
      `}
  }
  @media only screen and (max-width: 31em) {
    text-align: center;
  }
`;

export default StyledHeadingBox;
