import { createContext, useContext, useEffect, useState } from "react";
// import { useLocalStorageState } from "../hooks/useLocalStorageState";

import styled, { css } from "styled-components";

const StyledColor = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 1rem;
  right: 4.2%;
  background-color: var(--bg-color);
  z-index: 1000;
  -webkit-transition: -webkit-transform 1s cubic-bezier(0.86, 0, 0.07, 1);
  transition: -webkit-transform 1s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1);
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 1s cubic-bezier(0.86, 0, 0.07, 1);

  z-index: -1;
  ${(props) =>
    props.$active
      ? css`
          transform: scale(100);
        `
      : css`
          transform: scale(0);
        `};
`;

function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <StyledColor $active={isDarkMode} />
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkmodeContext is used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
