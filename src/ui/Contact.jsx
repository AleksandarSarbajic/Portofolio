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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </StyledContainer>
  );
}

export default Contact;
