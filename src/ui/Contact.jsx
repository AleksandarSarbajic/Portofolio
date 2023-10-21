import styled from "styled-components";
import StyledForm from "./Form";
import { useForm } from "react-hook-form";
// import Input from "./Input";

const StyledContainer = styled.div`
  margin: 10rem 0;
`;

const StyledHeading = styled.h4``;
const StyledText = styled.p``;
function Contact() {
  const { onSubmit, register } = useForm();

  return (
    <StyledContainer>
      <StyledHeading>Want to get in touch?</StyledHeading>
      <StyledHeading>Send me a message! </StyledHeading>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StyledText>
      <StyledForm
        name="contact"
        data-netlify="true"
        method="post"
        onSubmit="submit"
      >
        <input type="text" id="name" name="first-name" />
        <button type="submit">dasd</button>
      </StyledForm>
    </StyledContainer>
  );
}

export default Contact;
