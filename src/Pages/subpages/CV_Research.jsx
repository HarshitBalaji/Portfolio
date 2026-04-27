// Research work section for conference papers and publications in progress.
import { usePortfolio } from '../../context/usePortfolio';

function CV_Research() {
  const { content } = usePortfolio();
  const { researchHeader, researchPapers } = content;

  return (
    <section className="timeline-section research-section">
      <div className="section-header compact">
        <span className="eyebrow">{researchHeader.eyebrow}</span>
        <h1>{researchHeader.title}</h1>
      </div>

      <div className="timeline-list">
        {researchPapers.map((paper) => (
          <article key={paper.title} className="timeline-card research-card">
            <div className="research-card-top">
              <span className="project-period">{paper.year}</span>
              {paper.award && <span className="project-period award-pill">{paper.award}</span>}
            </div>
            <h2 className="xp-role">{paper.title}</h2>
            <p className="xp-meta">Presented at {paper.conference}</p>
            <p className="research-summary">{paper.summary}</p>
            <ul className="project-detail-list">
              {paper.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="research-publication">{paper.publication}</p>
            <div className="tag-row">
              {paper.highlights.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CV_Research;
