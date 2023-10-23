import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLi = styled.li`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${(props) =>
    props.$blue &&
    css`
      color: var(--color-blue-700);
    `}

  ${(props) =>
    props.$heading &&
    css`
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 3rem;
    `}
  svg {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    font-size: 1.8rem;

    font-weight: 700;
    color: var(--color-brand-500);
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

function ProjectListItem({ heading, link, children }) {
  if (link)
    return (
      <StyledLi>
        <StyledLink target="_blank" to={link}>
          {children}
        </StyledLink>
      </StyledLi>
    );

  return <StyledLi $heading={heading}>{children}</StyledLi>;
}

export default ProjectListItem;
