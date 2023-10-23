import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    transition: all 0.4s;
  }
  &:hover,
  &:active {
    color: var(--color-brand-600);
  }
  &:hover svg {
    color: var(--color-brand-600);
    transform: translateX(35%);
  }
  svg {
    font-size: 2.8rem;
    transition: all 0.4s;
  }
`;

export default StyledLink;
