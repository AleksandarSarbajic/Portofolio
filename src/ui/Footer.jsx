import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1.5rem 5%;
  display: flex;
`;

const StyledLogo = styled.h4`
  font-size: 2rem;
  margin-right: auto;
  font-weight: 500;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  &:hover,
  &:active {
    color: var(--color-brand-500);
    border-bottom: 1px solid var(--color-brand-500);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo>Designed and Built by Aleksandar Sarbajic</StyledLogo>
      <StyledList>
        <li>
          <StyledLink
            target="_blank"
            to={"https://github.com/AleksandarSarbajic"}
          >
            GitHub
          </StyledLink>
        </li>
        <li>
          <StyledLink
            target="_blank"
            to={
              "https://www.linkedin.com/in/aleksandar-%C5%A1arbaji%C4%87-77275815a/"
            }
          >
            LinkedIn
          </StyledLink>
        </li>
        <li>
          <StyledLink to={"mailto:sleasarbajic@gmail.com"}>Email</StyledLink>
        </li>
      </StyledList>
    </StyledFooter>
  );
}

export default Footer;
