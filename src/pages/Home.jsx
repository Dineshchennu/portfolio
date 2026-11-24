import { Link } from "react-router-dom";
import { profile, projects } from "../data/resume";
import Receipt from "../components/Receipt";
import ProjectRow from "../components/ProjectRow";

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">
            {profile.title} in {profile.location}
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="actions">
            <Link className="button button-primary" to="/projects">
              See my projects
            </Link>
            <Link className="button" to="/contact">
              Contact me
            </Link>
          </div>
        </div>
        <Receipt />
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Selected work</h2>
          <Link className="text-link" to="/projects">
            All projects
          </Link>
        </div>
        <ul className="project-list">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      </section>

      <section className="container section closing">
        <p className="closing-text">
          Building something with billing, payments or a storefront?{" "}
          <a href={`mailto:${profile.email}`}>Write to me</a> and tell me what you need.
        </p>
      </section>
    </>
  );
}

export default Home;
