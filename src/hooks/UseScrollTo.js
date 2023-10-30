import { useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTo({ hash: name, scrollTo = "center" }) {
  const ref = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === name) {
      ref.current.scrollIntoView({ behavior: "smooth", block: scrollTo });
    }
  }, [hash, name, scrollTo]);

  return { ref, pathname };
}
