import { useMemo, useState } from "react";
import { projects } from "../data/resume";
import PageHeader from "../components/PageHeader";
import ProjectRow from "../components/ProjectRow";

function Projects() {
  // State: which technology filter is selected ("All" means no filter).
  const [active, setActive] = useState("All");

  // useMemo caches a calculation between renders. The list of technologies only
  // depends on the data, so we build it once instead of on every render.
  const technologies = useMemo(() => {
    const all = projects.flatMap((project) => project.stack);
    return ["All", ...new Set(all)];
  }, []);

  // Derived data: no extra state needed, it is computed from `active`.
  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(active));

  return (
    <>
      <PageHeader
        title="Projects"
        lead="Billing, CRM, payments and online stores, built and maintained for real clients."
      />

      <section className="container section">
        <div className="filters" role="group" aria-label="Filter by technology">
          {technologies.map((tech) => (
            <button
              key={tech}
              type="button"
              className={tech === active ? "filter is-active" : "filter"}
              aria-pressed={tech === active}
              onClick={() => setActive(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <p className="muted result-count" role="status">
          Showing {visible.length} of {projects.length} projects
        </p>

        <ul className="project-list">
          {visible.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Projects;
