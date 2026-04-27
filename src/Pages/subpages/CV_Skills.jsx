// Skills section for the about area.
import { usePortfolio } from '../../context/usePortfolio';

function CV_Skills() {
  const { content } = usePortfolio();
  const { learningNow, skillGroups, skillsHeader } = content;

  return (
    <section id="cv-skills">
      <div className="section-header compact">
        <span className="eyebrow">{skillsHeader.eyebrow}</span>
        <h1>{skillsHeader.title}</h1>
      </div>

      {/* Skill groups are data-driven so adding a new group only requires data changes. */}
      {skillGroups.map((group) => (
        <div className="skill-row" key={group.label}>
          <div className="skill-label">{group.label}</div>
          <div className="pill-wrap">
            {group.items.map((item) => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="skill-divider" />

      <div className="skill-row">
        <div className="skill-label">{skillsHeader.learningLabel}</div>
        <div className="pill-wrap">
          {learningNow.map((item) => (
            <span className="pill pill-soft" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CV_Skills;
