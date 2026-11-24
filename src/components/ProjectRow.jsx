import { Link } from "react-router-dom";

// One row of the project list. The whole row is a link to /projects/:id,
// so the URL for each project is shareable.
function ProjectRow({ project }) {
  return (
    <li className="project-row">
      <Link to={`/projects/${project.id}`} className="project-link">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="stack-list" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </Link>
    </li>
  );
}

export default ProjectRow;
