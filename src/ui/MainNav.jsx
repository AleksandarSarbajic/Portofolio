import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";

const StyledNav = styled.nav`
  padding: 1.5rem 5%;
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.h3`
  font-size: 2.4rem;
  margin-right: auto;
  font-weight: 600;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  @media only screen and (max-width: 50em) {
    gap: 3rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--color-opacity-100);
    top: 0;
    left: 0;

    transition: all 0.5s;
    z-index: 10;

    ${(props) =>
      !props.$active
        ? css`
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(7px);
          `
        : css`
            transform: translateX(0%);
            opacity: 1;
            visibility: visible;
            -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(7px);
          `}
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
  &:hover,
  &:active {
    transform: translateY(-5%);
    color: var(--color-brand-500);
    border-bottom: 1px solid var(--color-brand-500);
  }

  @media only screen and (max-width: 50em) {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

const StyledMenu = styled.button`
  display: none;

  width: 3rem;

  @media only screen and (max-width: 50em) {
    display: block;
    z-index: 11;

    &:before,
    &:after,
    & div {
      background-color: ${(props) =>
        !props.$active ? "var(--color-grey-900)" : "var(--color-brand-900)"};
      content: "";
      display: block;
      height: 0.2rem;
      border-radius: 3px;
      margin: 0.8rem 0;
      transition: 0.5s;
    }

    &:before {
      transform: ${(props) =>
        props.$active ? "translateY(8px) rotate(135deg)" : ""};
    }

    &:after {
      transform: ${(props) =>
        props.$active ? "translateY(-8px) rotate(-135deg)" : ""};
    }
    & div {
      scale: ${(props) => (props.$active ? 0 : "")};
    }
  }
`;

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <StyledLogo>Aleksandar Sarbajic</StyledLogo>

      <StyledList $active={isOpen}>
        <li>
          <StyledLink onClick={() => setIsOpen((open) => !open)} to={"#home"}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={() => setIsOpen((open) => !open)}
            to={"#aboutme"}
          >
            About me
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={() => setIsOpen((open) => !open)}
            to={"#projects"}
          >
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={() => setIsOpen((open) => !open)}
            to={"#contact"}
          >
            Contact me
          </StyledLink>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </StyledList>
      <StyledMenu $active={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <div></div>
      </StyledMenu>
    </StyledNav>
  );
}

export default MainNav;
