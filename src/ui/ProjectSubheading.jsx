import styled, { css } from "styled-components";

const StyledSubHeading = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  width: 60%;
  font-weight: 500;

  ${(props) =>
    props.$big &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.$space &&
    css`
      margin-top: 5rem;
    `}
`;

export default StyledSubHeading;
