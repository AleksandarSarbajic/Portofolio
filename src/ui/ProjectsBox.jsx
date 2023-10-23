import styled, { css } from "styled-components";

const ProjectBox = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0%, 1fr));
  gap: 10rem 15rem;
  ${(props) =>
    props.$margin &&
    css`
      margin: 5rem 0 20rem 0;
    `}
  @media only screen and (max-width: 62.5em) {
    gap: 10rem;
  }
  @media only screen and (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export default ProjectBox;
