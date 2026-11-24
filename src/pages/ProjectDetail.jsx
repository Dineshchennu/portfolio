import { Link, useParams } from "react-router-dom";
import { projects } from "../data/resume";
import splitHighlight from "../utils/splitHighlight";

function ProjectDetail() {
  // CONCEPT: useParams reads the dynamic part of the URL (/projects/:id).
  const { id } = useParams();
  const index = projects.findIndex((project) => project.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <section className="container page-header">
        <h1>Project not found</h1>
        <p className="page-lead">
          There is no project at this address. <Link to="/projects">Back to all projects</Link>
        </p>
      </section>
    );
  }

  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="container detail">
      <Link className="text-link back-link" to="/projects">
        All projects
      </Link>

      <h1>{project.name}</h1>
      <p className="page-lead">{project.description}</p>

      <ul className="chips detail-stack" aria-label="Technologies">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h2>What I did</h2>
      <ul className="contributions">
        {project.highlights.map((point) => {
          const { label, body } = splitHighlight(point);
          return (
            <li key={point}>
              {label && <strong className="contribution-label">{label}</strong>}
              <span>{body}</span>
            </li>
          );
        })}
      </ul>

      <nav className="pager" aria-label="More projects">
        {previous ? (
          <Link to={`/projects/${previous.id}`}>
            <span className="muted">Previous</span>
            <span>{previous.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/projects/${next.id}`} className="pager-next">
            <span className="muted">Next</span>
            <span>{next.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

export default ProjectDetail;
