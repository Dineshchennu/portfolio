import { Link } from "react-router-dom";

// Rendered by the catch-all route (path="*") for any address that doesn't match.
function NotFound() {
  return (
    <section className="container page-header">
      <h1>Page not found</h1>
      <p className="page-lead">
        This address doesn&apos;t lead anywhere. <Link to="/">Go to the home page</Link>
      </p>
    </section>
  );
}

export default NotFound;
