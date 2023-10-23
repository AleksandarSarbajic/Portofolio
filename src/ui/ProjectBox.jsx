import styled from "styled-components";

const StyledProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0%, 1fr));
  gap: 10%;
  margin: 15rem 0;
  @media only screen and (max-width: 50em) {
    gap: 2.5%;
  }
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export default StyledProjectBox;
