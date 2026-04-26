// Standalone projects page.
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section className="page-section projects-page">
      <div className="section-header">
        <span className="eyebrow">Projects</span>
        <h1>Built to make engineering work more effective.</h1>
        <p className="section-copy">
          My best work usually combines clean product thinking with practical systems knowledge. These projects reflect that balance across software, automation, and robotics.
        </p>
      </div>

      <div className="projects-grid">
        {/* Each project card is generated from shared data in src/data/portfolio.js. */}
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card-top">
              <span className="project-period">{project.period}</span>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>

            <ul className="project-detail-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="tag-row">
              {project.stack.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
