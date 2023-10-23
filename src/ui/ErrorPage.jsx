import { useRouteError } from "react-router-dom";

import styled from "styled-components";
import StyledButton from "./Button";

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const StyledBox = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 1.6rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    color: var(--color-grey-500);
    font-size: 1.8rem;
  }
`;

function ErrorPage() {
  let error = useRouteError();
  console.log(error.message);

  return (
    <StyledContainer>
      <StyledBox>
        <h1>Something went wrong</h1>
        <p>{error.message ? error.message : "Page doesn't exist"}</p>
        <StyledButton onClick={() => window.location.replace("/")}>
          {error.message ? "Try again" : "Go back"}
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
}

export default ErrorPage;
