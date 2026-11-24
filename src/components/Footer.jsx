import { Link } from "react-router-dom";
import { profile } from "../data/resume";

// Computed once when the file loads, which keeps the component "pure":
// the same props always produce the same output.
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
