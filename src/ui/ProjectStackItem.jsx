import styled, { css } from "styled-components";

const StyledStackItem = styled.li`
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 700;
  display: inline-block;

  ${(props) =>
    props.$blue &&
    css`
      color: var(--color-brand-500);
    `}
  ${(props) =>
    props.$red &&
    css`
      color: var(--color-red-700);
    `}
  ${(props) =>
    props.$pink &&
    css`
      color: var(--color-pink-400);
    `}
  ${(props) =>
    props.$green &&
    css`
      color: var(--color-green-700);
    `}

  gap: 1rem;
  box-shadow: var(--shadow-item);
  padding: 0.6rem 1.5rem;
  svg {
    font-size: 2.4rem;
    vertical-align: middle;
  }
`;

export default StyledStackItem;
