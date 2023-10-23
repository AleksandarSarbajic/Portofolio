import styled from "styled-components";

const StyledImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0%, 1fr));
  gap: 5rem;
  img {
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
  }
`;

export default StyledImageBox;
