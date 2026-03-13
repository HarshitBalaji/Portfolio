import React from "react";

function CV_Skills() {
  return (
    <section id="cv-skills">

      <div className="skill-row">
        <div className="skill-label">Backend</div>
        <div className="pill-wrap">
          <span className="pill">FastAPI</span>
          <span className="pill">SQLAlchemy</span>
          <span className="pill">REST</span>
          <span className="pill">RBAC</span>
          <span className="pill">C# / .NET</span>
          <span className="pill">Azure SQL</span>
        </div>
      </div>

      <div className="skill-row">
        <div className="skill-label">Frontend</div>
        <div className="pill-wrap">
          <span className="pill">React</span>
          <span className="pill">Vite</span>
          <span className="pill">PrimeReact</span>
          <span className="pill">Tailwind</span>
        </div>
      </div>

      <div className="skill-row">
        <div className="skill-label">Robotics</div>
        <div className="pill-wrap">
          <span className="pill">ROS2</span>
          <span className="pill">MoveIt2</span>
          <span className="pill">PCA9685</span>
          <span className="pill">Raspberry Pi</span>
        </div>
      </div>

      <div className="skill-row">
        <div className="skill-label">Testing & DevOps</div>
        <div className="pill-wrap">
          <span className="pill">Selenium (C#)</span>
          <span className="pill">PyTest</span>
          <span className="pill">CI/CD Basics</span>
          <span className="pill">Git</span>
          <span className="pill">Azure</span>
          <span className="pill">Docker</span>
        </div>
      </div>

      <div className="skill-row">
        <div className="skill-label">Databases</div>
        <div className="pill-wrap">
          <span className="pill">SQL Server</span>
          <span className="pill">MySQL</span>
          <span className="pill">SQLite</span>
        </div>
      </div>

      <div className="skill-divider" />

      <div className="skill-row">
        <div className="skill-label">Currently Learning</div>
        <div className="pill-wrap">
          <span className="pill pill-soft">Microsoft Full Stack (in progress)</span>
          <span className="pill pill-soft">Azure DevOps</span>
          <span className="pill pill-soft">Docker</span>
        </div>
      </div>
    </section>
  );
}

export default CV_Skills;
