import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsInView } from "../context/IsInViewContext";

export default function useScrollToTop() {
  const { pathname } = useLocation();
  const { setSectionHandler } = useIsInView();

  useEffect(() => {
    setSectionHandler("#home");
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}
