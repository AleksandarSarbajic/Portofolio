import styled from "styled-components";

const StyledStack = styled.ul`
  display: flex;
  flex-direction: column;

  /* grid-template-columns: repeat(2, minmax(0%, min-width)); */

  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  /* margin: 0 15%; */

  @media only screen and (max-width: 50em) {
    grid-row: 2 / 3;
    margin: 10rem 0 0 0;
  }
`;

export default StyledStack;
