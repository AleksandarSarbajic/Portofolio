import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    font-size: 2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    width: max-content;
    gap: 1rem;
    margin-top: 1rem;
    padding-bottom: 0.3rem;
    transition: all 0.4s;
    border-bottom: 2px solid transparent;
  }
  &:hover,
  &:active {
    color: var(--color-brand-600);
    border-bottom: 2px solid var(--color-brand-600);
  }
  &:hover svg {
    color: var(--color-brand-600);
    transform: translateX(25%);
  }
  svg {
    font-size: 2.8rem;
    transition: all 0.4s;
  }
`;

export default StyledLink;
