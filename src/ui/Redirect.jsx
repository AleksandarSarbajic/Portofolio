import styled from "styled-components";
import StyledButton from "./Button";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  text-align: center;
`;

const StyledMessage = styled.h4`
  font-size: 2.4rem;
  letter-spacing: 1;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

function Redirect() {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/");
  }

  return (
    <StyledContainer>
      <StyledMessage>Thank you for sending me a message!</StyledMessage>
      <StyledText>I&apos;ll try to answer as fast as possible!</StyledText>
      <StyledButton onClick={handleOnClick} $redirect={true}>
        Go back
      </StyledButton>
    </StyledContainer>
  );
}

export default Redirect;
