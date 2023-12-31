import styled from "styled-components";
import StyledForm from "./Form";
import StyledButton from "./Button";
import useScrollTo from "../hooks/UseScrollTo";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import { useIsInView } from "../context/IsInViewContext";

const StyledContainer = styled.section`
  margin: 15.6rem 0 15.6rem 0;
`;

const StyledHeading = styled.h4`
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1rem;
  @media only screen and (max-width: 50em) {
    text-align: center;
  }
`;
const StyledText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  width: 60%;
  @media only screen and (max-width: 50em) {
    text-align: center;
    width: 100%;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 31em) {
    gap: 2.5rem;
  }
`;

const StyledLabel = styled.label`
  font-size: 1.8rem;
  /* text-transform: uppercase; */
  font-weight: 500;
`;

const StyledInput = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  color: var(--color-black-100);
  border: 1px solid var(--color-grey-900);
  &::placeholder {
    font-size: 1.6rem;
    font-weight: 500;
    opacity: 0.7;
  }
`;

const StyledTextArea = styled.textarea`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  color: var(--color-black-100);
  min-height: 10rem;
  min-width: 50%;
  height: 20rem;
  &::placeholder {
    font-size: 1.6rem;
    font-weight: 500;
    opacity: 0.7;
  }
`;

function Contact() {
  const { ref: intRef, inView: intInView } = useInView({
    threshold: 1,
  });

  const { setSectionHandler } = useIsInView();

  useEffect(() => {
    if (intInView) {
      setSectionHandler("#contact");
    }
  }, [intInView, setSectionHandler]);

  const { ref: containerRef } = useScrollTo({
    hash: "#contact",
    scrollTo: "center",
  });

  return (
    <StyledContainer ref={containerRef}>
      <StyledHeading ref={intRef}>Want to get in touch?</StyledHeading>
      <StyledHeading>Send me a message! </StyledHeading>
      <StyledText>
        If you&apos;re searching for a developer, need help with something, or
        just want to connect, don&apos;t hesitate to get in touch.
      </StyledText>
      <StyledForm name="contact" method="post" action="/redirect">
        <StyledInput type="hidden" name="form-name" value="contact" />
        <StyledRow>
          <StyledBox>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              required
              placeholder="Jhon Doe"
            />
          </StyledBox>
          <StyledBox>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail.com"
            />
          </StyledBox>
        </StyledRow>
        <StyledBox>
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledTextArea
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          ></StyledTextArea>
        </StyledBox>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}

export default Contact;
