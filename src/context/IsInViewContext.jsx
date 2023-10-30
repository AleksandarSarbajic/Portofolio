import { useState } from "react";

import { useContext } from "react";
import { createContext } from "react";

const IsInViewContext = createContext();

function IsInViewProvider({ children }) {
  const [section, setSection] = useState("#home");

  function setSectionHandler(value) {
    setSection(value);
  }

  return (
    <IsInViewContext.Provider value={{ section, setSectionHandler }}>
      {children}
    </IsInViewContext.Provider>
  );
}

function useIsInView() {
  const context = useContext(IsInViewContext);
  if (context === undefined)
    throw new Error("UseInViewContext is outside of the context");
  return context;
}

export { IsInViewProvider, useIsInView };
