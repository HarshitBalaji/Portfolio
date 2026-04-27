// Standalone projects page.
import { usePortfolio } from '../context/usePortfolio';

function Projects() {
  const { content } = usePortfolio();
  const { projects, projectsPage } = content;

  return (
    <section className="page-section projects-page">
      <div className="section-header">
        <span className="eyebrow">{projectsPage.eyebrow}</span>
        <h1>{projectsPage.title}</h1>
        <p className="section-copy">{projectsPage.copy}</p>
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

            {project.repo && (
              <a className="project-repo-link" href={project.repo} target="_blank" rel="noreferrer">
                {projectsPage.repoLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
