import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 10rem 0 6rem 0;
`;

function ProjectHeader({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default ProjectHeader;
