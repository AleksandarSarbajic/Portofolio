import styled from "styled-components";

const ButtonIcon = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
    @media only screen and (max-width: 50em) {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
`;

export default ButtonIcon;
