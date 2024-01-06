import styled, { css } from "styled-components";

const StyledImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0%, 1fr));
  gap: 5rem;

  ${(props) =>
    props.$type &&
    css`
      display: grid;
      grid-template-columns: repeat(2, minmax(0%, 1fr));
      gap: 5rem;
    `}

  img {
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
  }
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    gap: 10rem;
  }
`;

export default StyledImageBox;
