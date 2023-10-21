import styled from "styled-components";

const StyledForm = styled.form`
  width: 60%;
  @media only screen and (max-width: 62.5em) {
    width: 70%;
  }
  @media only screen and (max-width: 50em) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 31em) {
    width: 100%;
  }
`;

export default StyledForm;
