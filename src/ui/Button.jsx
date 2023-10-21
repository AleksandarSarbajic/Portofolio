import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.8rem;
  padding: 0.6rem 2.4rem;
  font-weight: 600;
  margin-top: 3rem;

  background-color: transparent;
  border: 2px solid var(--color-grey-900);

  color: var(--color-grey-900);
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-grey-800);
    color: var(--color-grey-0);
  }
`;

export default StyledButton;
