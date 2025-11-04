import React from "react";

function CV_Experience() {
  return (
    <section id="cv-experience"  style={{textAlign: 'left'}}>

      <div className="xp-item">
        <div className="xp-head">
          <h2 className="xp-role">Graduate Engineer Trainee</h2>
          <div className="xp-meta">Carl Zeiss • Jul 2024 - Jul 2025 • Bengaluru</div>
        </div>
        <ul className="xp-bullets">
          <li>Prototyped a C# diagnostics tool (WinForms) for medical imaging systems; automated health checks and reduced service time by <b>30–40%</b>.</li>
          <li>Built and deployed a lab inventory platform (<b>React + FastAPI + SQL Server on Azure</b>) enabling real-time device status across R&D labs.</li>
          <li>Stabilized the <b>VisuCore500</b> test suite (1000+ Selenium+C# cases), improving CI reliability and coverage reporting.</li>
        </ul>
      </div>

      <div className="xp-item">
        <div className="xp-head">
          <h2 className="xp-role">Software Intern</h2>
          <div className="xp-meta">Carl Zeiss • Jan 2024 - Jun 2024 • Bengaluru</div>
        </div>
        <ul className="xp-bullets">
          <li>Contributed backend logic and deployment to an internal <b>feature store</b> supporting ML workflows, improving integration reliability.</li>
          <li>Built a <b>CI dashboard</b> in React, reducing manual build tracking by <b>~60%</b> and improving sprint visibility.</li>
          <li>Wrote early QA cases for VisuCore500 (C# + Selenium), reducing flaky tests.</li>
        </ul>
      </div>

      <div className="xp-item">
        <div className="xp-head">
          <h2 className="xp-role">Robotics R&D Intern</h2>
          <div className="xp-meta">CAIR Lab, DRDO • Aug 2023 - Nov 2023 • Bengaluru</div>
        </div>
        <ul className="xp-bullets">
          <li>Integrated <b>MoveIt2</b> with <b>PlanSys2</b> in <b>ROS2 Humble</b> for autonomous task execution on a custom robotic arm.</li>
          <li>Benchmarked OMPL planners; tuned RRTConnect for ~<b>80%</b> path consistency in <b>&lt;45%</b> runtime.</li>
        </ul>
      </div>
    </section>
  );
}

export default CV_Experience;
