import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { useCallback, useEffect, useState } from "react";
import { useIsInView } from "../context/IsInViewContext";

const StyledNav = styled.nav`
  padding: 3rem 5%;
  display: flex;
  align-items: center;
  transition: all 0.4s;
  ${(props) =>
    props.$inView &&
    css`
      padding: 3rem 5%;
      background-color: var(--color-grey-0);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
      color: var(--color-grey-900);
      box-shadow: var(--shadow-lg);
    `}
`;

const StyledHidden = styled.div`
  display: none;
  content: " ";
  ${(props) =>
    props.$inView &&
    css`
      padding: 3rem 5%;
      display: block;
      height: 9.6rem;
      width: 100%;
    `}
`;

const StyledLogo = styled(NavLink)`
  &:visited,
  &:link {
    font-size: 2.4rem;
    margin-right: auto;
    font-weight: 600;
    transition: color 0.3s;
  }
  &:hover,
  &:active {
    color: var(--color-brand-500);
  }
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

  ${(props) =>
    props.$inView === props.$code
      ? css`
          transform: translateY(-5%);
          color: var(--color-brand-500);
          border-bottom: 1px solid var(--color-brand-500);
        `
      : ""}

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
  const { section, setSectionHandler } = useIsInView();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    if (pageYOffset <= 200) {
      setSectionHandler("#home");
    }
    setScrollY(pageYOffset);
  }, [setSectionHandler]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <>
      <StyledHidden $inView={scrollY >= 750} />
      <StyledNav $inView={scrollY >= 750}>
        <StyledLogo to={"/"}>Aleksandar Sarbajic</StyledLogo>

        <StyledList $active={isOpen}>
          <li>
            <StyledLink
              $inView={section}
              $code={"#home"}
              onClick={() => {
                setIsOpen((open) => !open);
                if (pathname === "/") {
                  document.documentElement.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  navigate("/");
                } else {
                  navigate("/");
                }
              }}
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $inView={section}
              $code={"#aboutme"}
              onClick={() => setIsOpen((open) => !open)}
              to={"/#aboutme"}
            >
              About me
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $inView={section}
              $code={"#skills"}
              onClick={() => setIsOpen((open) => !open)}
              to={"/#skills"}
            >
              Skills
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $inView={section}
              $code={"#projects"}
              onClick={() => setIsOpen((open) => !open)}
              to={"/#projects"}
            >
              Projects
            </StyledLink>
          </li>
          <li>
            <StyledLink
              $inView={section}
              $code={"#contact"}
              onClick={() => setIsOpen((open) => !open)}
              to={"/#contact"}
            >
              Contact me
            </StyledLink>
          </li>
          <li>
            <DarkModeToggle onClick={() => setIsOpen((open) => !open)} />
          </li>
        </StyledList>
        <StyledMenu $active={isOpen} onClick={() => setIsOpen((open) => !open)}>
          <div></div>
        </StyledMenu>
      </StyledNav>
    </>
  );
}

export default MainNav;
