import React from "react";
import DITLogo from '../../assets/ditlogo.jpg';
import BMSITLogo from '../../assets/bmsitlogo.png';
import ClarenceLogo from '../../assets/clarenceemblem.png'

function CV_Education() {
  return (
    <section id="cv-experience"  style={{textAlign: 'left'}}>

      <div class="xp-item">
        <div class="xp-head" style={{display: 'flex', alignItems: 'center'}}>
          <img src={DITLogo} alt="Carl Zeiss Logo" height="60" style={{backgroundColor:"white", verticalAlign: 'middle', marginRight: '10px'}} />
          <div>
            <h2 class="xp-role">Master of Engineering in Robotics</h2>
            <div class="xp-meta">Deggendorf Institute of Technology, Campus Cham • Mar 2026 - present • Cham, Germany</div>
          </div>
        </div>
        <ul class="xp-bullets">
          <li>Focus Areas: Robotic Manipulation, Motion Planning, Embedded Control</li>
          <li>Coursework: Robot Kinematics, Control Systems, Computer Vision, Machine Learning, Embedded Systems</li>
          <li>Tools: ROS2 (Humble), MoveIt, RViz, Python, C/C++</li>
          <li>Working on simulation and control using URDF, motion planning, hardware integration</li>
          <li>Aim: Developing practical robotic systems for real-world applications</li>
        </ul>
      </div>

      <div class="xp-item">
        <div class="xp-head" style={{display: 'flex', alignItems: 'center'}}>
          <img src={BMSITLogo} alt="BMSIT Logo" height="60" style={{backgroundColor:"white", verticalAlign: 'middle', marginRight: '10px'}} />
          <div>
            <h2 class="xp-role">Bachelor of Engineering in Computer Science and Engineering</h2>
            <div class="xp-meta">BMS Institute of Technology & Management • Dec 2020 - Jun 2024 • Bengaluru, India</div>
          </div>
        </div>
        <ul class="xp-bullets">
          <li>CGPA: <b>7.89/10</b></li>
          <li>Final Year Thesis: <b>Autonomous Voice Controlled Arm Robot (AVCAR)</b></li>
          <li>Student Placement Coordinator</li>
        </ul>
      </div>

      <div class="xp-item">
        <div class="xp-head" style={{display: 'flex', alignItems: 'center'}}>
          <img src={ClarenceLogo} alt="Clarence High School Logo" height="60" style={{backgroundColor:"white", verticalAlign: 'middle', marginRight: '10px'}} />
          <div>
            <h2 class="xp-role">Class 10(ICSE), Class 12(ISC)</h2>
            <div class="xp-meta">Clarence High School • Jun 2017 - Jun 2020 • Bengaluru, India</div>
          </div>
        </div>
        <ul class="xp-bullets">
          <li> Class 10 Grade: <b>91.83%</b></li>
          <li> Class 12 Grade: <b>91.6%</b></li>
        </ul>
      </div>
    </section>
  );
}

export default CV_Education;
