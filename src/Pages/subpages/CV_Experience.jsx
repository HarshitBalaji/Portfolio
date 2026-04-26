// Experience timeline for the about section.
import ZeissLogo from '../../assets/zeisslogo.png';
import CairLogo from '../../assets/cairlogo.png';
import { experience } from '../../data/portfolio';

// Map short logo keys from the data file to imported image assets.
const logos = {
  zeiss: ZeissLogo,
  cair: CairLogo,
};

function CV_Experience() {
  return (
    <section className="timeline-section">
      <div className="section-header compact">
        <span className="eyebrow">Experience</span>
        <h1>Shipping tools, platforms, and engineering improvements.</h1>
      </div>

      <div className="timeline-list">
        {/* Each experience entry is rendered from shared structured data. */}
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="timeline-card">
            <div className="timeline-head">
              <img src={logos[item.logo]} alt={`${item.company} logo`} className="timeline-logo" />
              <div>
                <h2 className="xp-role">{item.role}</h2>
                <p className="xp-meta">{item.company} | {item.period} | {item.location}</p>
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

export default CV_Experience;
