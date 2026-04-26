// Landing page for the portfolio.
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Logo from './assets/logo.png'
import { highlightStats, profile, projects, strengths } from './data/portfolio';

function Cal() {
  // Load the Cal.com embed once so the schedule CTA can open the configured event.
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: profile.calNamespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [])

  return (
    <span
      className="options"
      data-cal-namespace={profile.calNamespace}
      data-cal-link={profile.calLink}
      data-cal-config='{"layout":"month_view"}'
    >
      Schedule a Chat
    </span>
  )
}

function downloadCV() {
  // Trigger a browser download for the hosted PDF resume.
  const link = document.createElement('a');
  link.href = profile.cvPath;
  link.download = 'Sai Harshit B - CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function CTA() {
  const navigate = useNavigate();

  return (
    <div className="CTA">
      <p>Let&apos;s build something together!</p>
      {/* These quick actions are intentionally high-visibility on the landing page. */}
      <div className="cta-links">
        <span className="options" onClick={() => { navigate('/app/about') }}>Meet the Engineer</span>
        <span className="options" onClick={() => { navigate('/app/contact') }}>Get in Touch</span>
        <span className="options" onClick={() => { navigate('/app/work') }}>See What I&apos;ve Built</span>
        <Cal />
        <span className="options" onClick={() => { downloadCV() }}>Download my CV</span>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div id="home">
      {/* Hero section keeps the desktop-first landing layout. */}
      <section className="hero-panel">
      <div className="home-logo">
        <img src={Logo} alt="logo" height="63" />
      </div>
        <h3 className="hero-greeting">Hello, I&apos;m</h3>
        <h1 id="Name">{profile.name}</h1>
        <p id="tagline">{profile.tagline}</p>
        <CTA />
      </section>

      {/* Short summary section for first-time visitors. */}
      <section className="home-section quick-intro">
        <div className="section-header">
          <span className="eyebrow">At a glance</span>
          <h2>Engineering software that feels useful from day one.</h2>
        </div>
        <p className="section-copy">{profile.intro}</p>
        <div className="stats-grid">
          {highlightStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Strength cards explain the main themes of the portfolio. */}
      <section className="home-section strengths-section">
        <div className="section-header">
          <span className="eyebrow">What I focus on</span>
          <h2>Software, systems, and automation that solve practical problems.</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((strength) => (
            <article key={strength.title} className="glass-card">
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Home page project preview reuses the first three project records. */}
      <section className="home-section featured-projects">
        <div className="section-header">
          <span className="eyebrow">Selected work</span>
          <h2>A few projects that reflect how I like to build.</h2>
        </div>
        <div className="project-preview-grid">
          {projects.slice(0, 3).map((project) => (
            <article key={project.name} className="project-preview-card">
              <span className="project-period">{project.period}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
