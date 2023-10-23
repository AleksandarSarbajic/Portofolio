import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 10rem;
  margin-bottom: 8rem;
`;

function ProjectListContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default ProjectListContainer;
