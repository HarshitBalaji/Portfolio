// Education timeline for the about section.
import DITLogo from '../../assets/ditlogo.jpg';
import BMSITLogo from '../../assets/bmsitlogo.png';
import ClarenceLogo from '../../assets/clarenceemblem.png'
import { usePortfolio } from '../../context/usePortfolio';

// Map short logo keys from the data file to imported image assets.
const logos = {
  dit: DITLogo,
  bmsit: BMSITLogo,
  clarence: ClarenceLogo,
};

function CV_Education() {
  const { content } = usePortfolio();
  const { education, educationHeader } = content;

  return (
    <section className="timeline-section">
      <div className="section-header compact">
        <span className="eyebrow">{educationHeader.eyebrow}</span>
        <h1>{educationHeader.title}</h1>
      </div>

      <div className="timeline-list">
        {/* Each education entry is rendered from shared structured data. */}
        {education.map((item) => (
          <article key={`${item.school}-${item.title}`} className="timeline-card">
            <div className="timeline-head">
              <img src={logos[item.logo]} alt={`${item.school} logo`} className="timeline-logo" />
              <div>
                <h2 className="xp-role">{item.title}</h2>
                <p className="xp-meta">{item.school} | {item.period} | {item.location}</p>
              </div>
            </div>
            <ul className="xp-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CV_Education;
