import styled from "styled-components";

const StyledSkill = styled.li`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  color: var(--color-grey-900);
  svg {
    font-size: 3rem;
    @media only screen and (max-width: 50em) {
      font-size: 3.4rem;
    }
  }
  @media only screen and (max-width: 50em) {
    font-size: 2.4rem;
  }
`;
export default StyledSkill;
