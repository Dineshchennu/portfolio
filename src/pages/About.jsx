import { profile, skills, experience, education } from "../data/resume";
import PageHeader from "../components/PageHeader";

function About() {
  return (
    <>
      <PageHeader title="About" lead={profile.summary} />

      <section className="container section">
        <h2>Contact details</h2>
        <dl className="ledger">
          <div className="ledger-row">
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="ledger-row">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div className="ledger-row">
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </dd>
          </div>
          <div className="ledger-row">
            <dt>LinkedIn</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                dinesh-chennu-7313571a8
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="container section">
        <h2>Skills</h2>
        {/* A list inside a list: map over the groups, then over each group's items. */}
        <dl className="ledger">
          {skills.map((group) => (
            <div key={group.category} className="ledger-row">
              <dt>{group.category}</dt>
              <dd>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container section">
        <h2>Work experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline-item">
              <p className="timeline-period">{job.period}</p>
              <h3>
                {job.role}, {job.company}
              </h3>
              <p className="muted">{job.location}</p>
              <ul className="bullets">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section">
        <h2>Education</h2>
        {education.map((item) => (
          <article key={item.id} className="education">
            <h3>{item.degree}</h3>
            <p>
              {item.school}, {item.location}
            </p>
            <p className="muted">
              {item.period}. {item.grade}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}

export default About;
