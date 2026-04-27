// Central content store for the portfolio.
// Update these objects when you want to change text, labels, or repeated sections
// without hunting through multiple components.
export const profile = {
  name: "Sai Harshit B",
  fullName: "Sai Harshit Balaji",
  title: "Software Engineer | Automation Builder | Robotics Engineer",
  tagline: "Building platforms, automating workflows, and engineering robotic systems - together.",
  intro:
    "I build practical software that sits at the intersection of product engineering, automation, and real-world systems. My work spans internal platforms, diagnostics tools, CI dashboards, and robotics research.",
  currentFocus:
    "I am currently based in Germany, pursuing a Master's in Robotics while continuing to deepen my experience across React, FastAPI, cloud delivery, and intelligent automation.",
  cvPath: "/CV/Sai_Harshit_B_CV.pdf",
  calNamespace: "30min",
  calLink: "sai-harshit-b/30min",
};

// Main navigation order.
export const navItems = [
  { label: "Home", path: "/" },
  { label: "The Engineer", path: "/app/about" },
  { label: "Projects", path: "/app/work" },
  { label: "Get in Touch", path: "/app/contact" },
];

// Small summary stats shown on the home page.
export const highlightStats = [
  { value: "3+", label: "years across software, automation, and robotics" },
  { value: "30-40%", label: "service time reduction through diagnostics automation" },
  { value: "1000+", label: "test cases stabilized for stronger CI reliability" },
];

// High-level strengths shown as feature cards on the home page.
export const strengths = [
  {
    title: "Platform Engineering",
    description: "Designing internal tools and full-stack applications that help teams work faster and with better visibility.",
  },
  {
    title: "Workflow Automation",
    description: "Automating health checks, QA systems, and reporting pipelines to reduce manual work and improve consistency.",
  },
  {
    title: "Robotics Systems",
    description: "Working on motion planning, system control, and simulation for practical robotics research and deployment.",
  },
];

// Project cards for the projects page and home page preview.
export const projects = [
  {
    name: "R&D Lab Inventory Platform",
    period: "Carl Zeiss",
    summary:
      "A full-stack lab inventory platform used to monitor device availability and status across research teams.",
    details: [
      "Built the frontend in React and the backend in FastAPI with SQL Server.",
      "Deployed on Azure to provide real-time visibility into devices and lab readiness.",
      "Improved the speed of locating equipment and coordinating shared resources.",
    ],
    stack: ["React", "FastAPI", "SQL Server", "Azure"],
  },
  {
    name: "Medical Imaging Diagnostics Tool",
    period: "Carl Zeiss",
    summary:
      "A desktop diagnostics utility for automating health checks on medical imaging systems.",
    details: [
      "Prototyped in C# WinForms for engineering and service workflows.",
      "Reduced service investigation time through repeatable, automated checks.",
      "Created a practical foundation for faster device troubleshooting.",
    ],
    stack: ["C#", "WinForms", "Automation", "Diagnostics"],
  },
  {
    name: "CI Dashboard",
    period: "Carl Zeiss",
    summary:
      "A React dashboard for making build status, trends, and team visibility easier during sprint execution.",
    details: [
      "Surfaced key CI signals in a simple view for engineers and leads.",
      "Reduced manual build tracking overhead and improved handoff clarity.",
      "Helped the team focus on failures earlier in the delivery cycle.",
    ],
    stack: ["React", "JavaScript", "CI", "Dashboards"],
  },
  {
    name: "Autonomous Robotic Arm Planning",
    period: "CAIR Lab, DRDO",
    summary:
      "A robotics R&D effort focused on autonomous task execution for a custom robotic arm.",
    details: [
      "Integrated MoveIt2 with PlanSys2 in ROS2 Humble.",
      "Benchmarked planning approaches to improve path consistency and runtime.",
      "Worked on system behavior that could move from simulation toward real hardware.",
    ],
    stack: ["ROS2", "MoveIt2", "PlanSys2", "Python"],
  },
];

// Work timeline used by the experience section.
export const experience = [
  {
    role: "Graduate Engineer Trainee",
    company: "Carl Zeiss",
    period: "Jul 2024 - Jul 2025",
    location: "Bengaluru",
    logo: "zeiss",
    bullets: [
      "Prototyped a C# diagnostics tool for medical imaging systems and reduced service effort through automated health checks.",
      "Built and deployed a React + FastAPI + SQL Server platform on Azure for real-time R&D lab inventory visibility.",
      "Improved stability and reporting confidence across a Selenium-based test suite with more than 1000 cases.",
    ],
  },
  {
    role: "Software Intern",
    company: "Carl Zeiss",
    period: "Jan 2024 - Jun 2024",
    location: "Bengaluru",
    logo: "zeiss",
    bullets: [
      "Contributed backend logic and deployment workflows for an internal feature store supporting ML teams.",
      "Built a CI dashboard in React that reduced manual build tracking and improved sprint visibility.",
      "Wrote QA coverage for the VisuCore500 platform using C# and Selenium.",
    ],
  },
  {
    role: "Robotics R&D Intern",
    company: "CAIR Lab, DRDO",
    period: "Aug 2023 - Nov 2023",
    location: "Bengaluru",
    logo: "cair",
    bullets: [
      "Integrated MoveIt2 with PlanSys2 in ROS2 Humble for autonomous task execution on a custom robotic arm.",
      "Benchmarked OMPL planners and tuned RRTConnect for stronger path consistency and improved runtime.",
    ],
  },
];

// Education timeline used by the education section.
export const education = [
  {
    title: "Master of Engineering in Robotics",
    school: "Deggendorf Institute of Technology, Campus Cham",
    period: "Mar 2026 - present",
    location: "Cham, Germany",
    logo: "dit",
    bullets: [
      "Focus areas: robotic manipulation, motion planning, and embedded control.",
      "Coursework includes robot kinematics, computer vision, machine learning, and embedded systems.",
      "Working on simulation, control, and hardware integration using ROS2 tooling.",
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    school: "BMS Institute of Technology & Management",
    period: "Dec 2020 - Jun 2024",
    location: "Bengaluru, India",
    logo: "bmsit",
    bullets: [
      "CGPA: 7.89/10",
      "Final year thesis: Autonomous Voice Controlled Arm Robot (AVCAR).",
      "Served as student placement coordinator.",
    ],
  },
  {
    title: "Class 10 (ICSE), Class 12 (ISC)",
    school: "Clarence High School",
    period: "Jun 2017 - Jun 2020",
    location: "Bengaluru, India",
    logo: "clarence",
    bullets: [
      "Class 10 grade: 91.83%",
      "Class 12 grade: 91.6%",
    ],
  },
];

// Skills are grouped so the UI can render them consistently.
export const skillGroups = [
  {
    label: "Backend",
    items: ["FastAPI", "SQLAlchemy", "REST APIs", "RBAC", "C# / .NET", "Azure SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "JavaScript", "Responsive CSS", "Routing", "Component Design"],
  },
  {
    label: "Robotics",
    items: ["ROS2", "MoveIt2", "PlanSys2", "RViz", "PCA9685", "Raspberry Pi"],
  },
  {
    label: "Testing & DevOps",
    items: ["Selenium (C#)", "PyTest", "CI/CD Basics", "Git", "Azure", "Docker"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "MySQL", "SQLite"],
  },
];

// Learning items are broken out because they render with a softer badge style.
export const learningNow = [
  "Microsoft Full Stack certification",
  "Azure DevOps",
  "Cloud delivery patterns",
];

// Contact rows support either clickable links or plain text values.
export const contactLinks = [
  { label: "LinkedIn", value: "linkedin.com/in/sai-harshit-b-4ba3411b5", href: "https://www.linkedin.com/in/sai-harshit-b-4ba3411b5/" },
  { label: "Email", value: "saiharshitbalaji@gmail.com", href: "mailto:saiharshitbalaji@gmail.com" },
  { label: "Phone", value: ["+91 8431-413-590  ,   +49 1551-072-6067"] },
  { label: "GitHub", value: "github.com/HarshitBalaji", href: "https://github.com/HarshitBalaji" },
  { label: "X", value: "@harshit_balaji", href: "https://x.com/harshit_balaji" },
  { label: "ORCID", value: "0009-0002-2376-5914", href: "https://orcid.org/0009-0002-2376-5914" },
];

// Collaboration bullets on the contact page.
export const collaborationPoints = [
  "Internal tools and dashboards",
  "Automation-heavy engineering workflows",
  "React and FastAPI product builds",
  "Robotics software and control systems",
];
