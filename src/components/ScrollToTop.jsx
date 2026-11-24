import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// CONCEPT: in a SPA the browser never reloads, so the scroll position carries over
// between pages. This component scrolls to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // renders nothing; it only runs the effect
}

export default ScrollToTop;
