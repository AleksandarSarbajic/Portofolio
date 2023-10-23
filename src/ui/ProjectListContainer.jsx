import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 10rem;
  margin-bottom: 8rem;

  @media only screen and (max-width: 31em) {
    justify-content: center;
  }
  @media only screen and (max-width: 26.5em) {
    gap: 7rem;
  }
  @media only screen and (max-width: 21.5em) {
    gap: 5rem;
  }
`;

function ProjectListContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ProjectListContainer;
