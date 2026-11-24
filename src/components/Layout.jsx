import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// CONCEPT: a layout route. Navbar and Footer stay on screen, and <Outlet />
// is the slot where the current page appears.
// Suspense shows a fallback while a lazily loaded page is being fetched.
function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Navbar />
      <main id="content" className="main">
        <Suspense fallback={<p className="loading">Loading page</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
