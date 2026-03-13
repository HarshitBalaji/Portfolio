import React from "react";

function CV_Education() {
  return (
    <section id="cv-education">
      <h2 className="cv-title">The Roadmap</h2>

      <div className="edu-item">
        <div className="edu-head">
          <span className="edu-degree">B.E. — Computer Science</span>
          <span className="edu-meta">BMS Institute of Technology & Management • 2020 – 2024 • Bengaluru</span>
        </div>
        <ul className="edu-bullets">
          <li>Final-year project: <b>Voice-controlled Robotic Arm</b> (ROS2 + MoveIt2); currently continuing hardware implementation.</li>
          <li>Co-authored <b>3 research papers</b> with faculty (submitted to conferences; under review).</li>
          <li>Focus areas: IoT, ML, Robotics; Robotics Club member.</li>
        </ul>
      </div>

      <div className="edu-divider" />

      {/* Optional minimal milestones — include for “all-purpose” completeness */}
      <div className="edu-minor">
        <div className="edu-line">
          <span className="edu-year">2018</span>
          <span>Grade 10 — Clarence High School • <b>91.83%</b></span>
        </div>
        <div className="edu-line">
          <span className="edu-year">2020</span>
          <span>Grade 12 (Electronics) — Clarence High School • <b>91.6%</b></span>
        </div>
        <div className="edu-note">*School milestones shown for completeness (all-purpose portfolio).</div>
      </div>
    </section>
  );
}

export default CV_Education;
