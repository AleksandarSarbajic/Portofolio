import styled from "styled-components";

const StyledStackItem = styled.li`
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  display: inline-block;

  gap: 1rem;
  box-shadow: var(--shadow-item);
  padding: 0.5rem 1.5rem;
  svg {
    font-size: 2.4rem;
    vertical-align: middle;
  }
`;

export default StyledStackItem;
