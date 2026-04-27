// Central bilingual content store for the portfolio.
// Update these objects when you want to change text, labels, or repeated sections.
const contactLinks = [
  { label: "LinkedIn", value: "linkedin.com/in/sai-harshit-b-4ba3411b5", href: "https://www.linkedin.com/in/sai-harshit-b-4ba3411b5/" },
  { label: "Email", value: "saiharshitbalaji@gmail.com", href: "mailto:saiharshitbalaji@gmail.com" },
  { label: "Phone", value: ["+91 8431-413-590  ,   +49 1551-072-6067"] },
  { label: "GitHub", value: "github.com/HarshitBalaji", href: "https://github.com/HarshitBalaji" },
  { label: "X", value: "@harshit_balaji", href: "https://x.com/harshit_balaji" },
  { label: "ORCID", value: "0009-0002-2376-5914", href: "https://orcid.org/0009-0002-2376-5914" },
];

const sharedProfile = {
  name: "Sai Harshit Balaji",
  fullName: "Sai Harshit Balaji",
  cvPath: "/CV/Sai_Harshit_B_CV.pdf",
  calNamespace: "30min",
  calLink: "sai-harshit-b/30min",
};

export const portfolioContent = {
  en: {
    profile: {
      ...sharedProfile,
      title: "Robotics + IoT Engineer | Robotics Software | Web Applications",
      tagline: "Building robotic systems, connected IoT prototypes, and the software that brings them to life.",
      intro:
        "I am a Robotics and IoT engineer focused on robotic manipulation, embedded systems, sensor-driven automation, and connected cyber-physical platforms. I also build web and software tools when they help monitor, control, or scale real engineering systems.",
      currentFocus:
        "I am currently based in Germany, pursuing a Master's in Robotics while building stronger depth in ROS2, robotic control, computer vision, IoT security, and the software interfaces around physical systems.",
    },
    navItems: [
      { label: "Home", path: "/" },
      { label: "The Engineer", path: "/app/about" },
      { label: "Projects", path: "/app/work" },
      { label: "Get in Touch", path: "/app/contact" },
    ],
    pageTitles: {
      '/app/about': 'The Engineer',
      '/app/about/experience': 'Professional Experience',
      '/app/about/research': 'Research Work',
      '/app/about/education': 'Education',
      '/app/about/skills': 'Tech Stack',
      '/app/work': 'Projects',
      '/app/contact': 'Get in Touch',
    },
    home: {
      greeting: "Hello, I'm",
      ctaLead: "Let's build intelligent physical systems together.",
      ctaAbout: "Meet the Engineer",
      ctaContact: "Get in Touch",
      ctaWork: "See What I've Built",
      ctaSchedule: "Schedule a Chat",
      ctaCv: "Download my CV",
      glanceEyebrow: "At a glance",
      glanceTitle: "Robotics, IoT, and software for real-world systems.",
      strengthsEyebrow: "What I focus on",
      strengthsTitle: "Robotic platforms, connected devices, and practical engineering software.",
      selectedEyebrow: "Selected work",
      selectedTitle: "Projects that show how I build across hardware, robotics, and software.",
    },
    highlightStats: [
      { value: "2", label: "robotic arm platforms designed and developed" },
      { value: "3", label: "research papers in IoT and cyber-physical systems" },
      { value: "70cm", label: "reach on an independently built 5-DOF arm prototype" },
    ],
    strengths: [
      {
        title: "Robotics Systems",
        description: "Building robotic arms, motion-planning workflows, simulation setups, and hardware-aware control systems.",
      },
      {
        title: "IoT & Embedded Platforms",
        description: "Designing connected prototypes with sensors, microprocessors, telemetry, device authentication, and secure data flows.",
      },
      {
        title: "Engineering Software",
        description: "Developing web applications, dashboards, APIs, and automation tools that support robotics, labs, and technical teams.",
      },
    ],
    projectsPage: {
      eyebrow: "Projects",
      title: "Robotics and IoT systems backed by practical software engineering.",
      copy:
        "These projects reflect my main direction: robotic hardware, IoT-enabled systems, and the software layers needed to control, monitor, and deploy them.",
      repoLabel: "GitHub Repository",
    },
    projects: [
      {
        name: "Autonomous Voice Controlled Arm Robot (AVCAR)",
        period: "Final Year Thesis",
        summary:
          "A robotic arm thesis project focused on voice-driven task execution, simulation, and autonomous manipulation workflows.",
        details: [
          "Developed as my final year thesis around an autonomous voice-controlled robotic arm.",
          "Worked on simulation and control workflows for arm movement and task execution.",
          "Created a foundation for extending the system toward physical hardware and richer perception-driven control.",
        ],
        stack: ["Robotics", "Python", "Simulation", "Control Systems"],
        repo: "https://github.com/HarshitBalaji/AVCAR_Simulation.git",
      },
      {
        name: "HB-A5-01",
        period: "Independent Robotics Project",
        summary:
          "My first independently developed robotic arm hardware project, built with support from Dr. Ambika G N.",
        details: [
          "Designed a 5-DOF robotic arm with a reach of up to 70 cm.",
          "Uses two processing units: a Raspberry Pi 4 for control and a StereoPi v2 Slim with Raspberry Pi Compute Module 4 for computer vision.",
          "Integrated an IMX219-83 stereo camera; hardware is built and software development is in progress.",
        ],
        stack: ["5-DOF Arm", "Raspberry Pi 4", "StereoPi v2", "IMX219-83", "Computer Vision"],
        repo: "https://github.com/HarshitBalaji/AVCAR_Simulation.git",
      },
      {
        name: "Lab Manager Application",
        period: "Carl Zeiss",
        summary:
          "A full-stack lab management platform used to monitor device availability and status across research teams.",
        details: [
          "Built the frontend in React and the backend in FastAPI with SQL Server.",
          "Deployed on a server limited to the lab's LAN.",
          "Includes a network monitor tool that indicates the status of the device.",
        ],
        stack: ["React", "FastAPI", "SQL Server", "LAN Deployment"],
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
    ],
    cvNav: [
      { label: 'The Engineer', path: '/app/about' },
      { label: 'On the Job', path: '/app/about/experience' },
      { label: 'Research Work', path: '/app/about/research' },
      { label: 'Education', path: '/app/about/education' },
      { label: 'Tech Stack', path: '/app/about/skills' },
    ],
    introTags: ["Robotics", "IoT", "Embedded Systems", "Computer Vision", "React/FastAPI"],
    experienceHeader: {
      eyebrow: "Experience",
      title: "Building software around devices, labs, and engineering workflows.",
    },
    experience: [
      {
        role: "Graduate Engineer Trainee",
        company: "Carl Zeiss",
        period: "Jul 2024 - Jul 2025",
        location: "Bengaluru",
        logo: "zeiss",
        bullets: [
          "Prototyped a C# diagnostics tool for medical imaging systems and reduced service effort through automated health checks.",
          "Built and deployed a React + FastAPI + SQL Server lab management platform for real-time R&D device visibility.",
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
          "Built engineering dashboards and React interfaces for internal visibility and workflow support.",
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
    ],
    educationHeader: {
      eyebrow: "Education",
      title: "Foundations in robotics, embedded systems, and software engineering.",
    },
    education: [
      {
        title: "Master of Engineering in Robotics",
        school: "Deggendorf Institute of Technology, Campus Cham",
        period: "Mar 2026 - present",
        location: "Cham, Germany",
        logo: "dit",
        bullets: [
          "Focus areas: robotic manipulation, motion planning, computer vision, and embedded control.",
          "Coursework includes robot kinematics, machine learning, embedded systems, and intelligent automation.",
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
        bullets: ["Class 10 grade: 91.83%", "Class 12 grade: 91.6%"],
      },
    ],
    researchHeader: {
      eyebrow: "Research Work",
      title: "Applied IoT, security, and cold-chain systems research.",
    },
    researchPapers: [
      {
        title: "IoT-Enabled Geofence and RFID Passkey System for Secure Blood Bag Handover in Cold Chain Logistics",
        year: "2025",
        conference: "Intelligent Machine Processes and AI-Centric Technologies (IMPACT 2025)",
        publication: "Under process for publication in Springer LNNS series.",
        summary:
          "Designed and validated a secure IoT cold-chain handover prototype that binds blood bag custody transfer to RFID authentication, geofence-triggered receiver authorization, and signed telemetry.",
        contributions: [
          "Built a proof of concept with an ESP32 Box Unit, Raspberry Pi Truck Unit, FastAPI server, MQTT telemetry, and a React monitoring interface.",
          "Implemented dual-sided RFID passkey validation with ECDSA-P256 signatures, replay protection, audit logging, and delivery-state transitions.",
          "Validated simulated sender/receiver handovers, telemetry streaming, anomaly alerts, and a scalable deployment cost model for fleet rollout.",
        ],
        highlights: ["ESP32", "Raspberry Pi", "RFID", "Geofencing", "ECDSA", "MQTT"],
      },
      {
        title: "Fed-AE: Privacy-Preserving and Zero-Day Intrusion Detection for IoT Edge Networks",
        year: "2026",
        conference: "IEEE Madhya Pradesh Section Conference (MPCON 2026)",
        publication: "Under process for publication in IEEE.",
        summary:
          "Proposed Fed-AE, a federated semi-supervised intrusion detection framework for IoT edge networks that detects anomalies without sharing raw traffic data.",
        contributions: [
          "Trained lightweight autoencoders on benign local traffic and aggregated model weights through Federated Averaging across 20 simulated clients.",
          "Evaluated on UNSW-NB15 under non-IID Dirichlet partitioning, achieving ROC-AUC 0.90 and PR-AUC 0.51 under privacy-preserving constraints.",
          "Demonstrated fast convergence within early communication rounds and strong detection behavior for high-volume attack categories.",
        ],
        highlights: ["Federated Learning", "Autoencoders", "IoT Edge", "UNSW-NB15", "Zero-Day IDS"],
      },
      {
        title: "Unified Operational-Cyber Anomaly Intelligence for Risk-Aware IoT Blood Bank Cold-Chain Monitoring",
        year: "2026",
        conference: "International Conference on Computing Systems and Intelligent Applications (ComSIA 2026)",
        publication: "Springer LNNS approved conference. Under process for publication.",
        award: "Best Paper Award",
        summary:
          "Built a unified anomaly intelligence framework that distinguishes operational cold-chain failures from cyber manipulation of IoT telemetry.",
        contributions: [
          "Combined operational telemetry features with device security posture signals including CVSS, EPSS, and device vulnerability density.",
          "Tested on a synthetic 50-device, roughly 144k-record cold-chain dataset, improving accuracy from 0.96 to 0.98 while reducing false positives.",
          "Improved cyber-anomaly PR-AUC to 0.703 and reduced cyber false negatives by more than half compared with baseline approaches.",
        ],
        highlights: ["Risk-Aware IoT", "Cyber-Physical Security", "CVSS", "EPSS", "Anomaly Intelligence"],
      },
    ],
    skillsHeader: {
      eyebrow: "Tech stack",
      title: "Tools I use to build robotic and connected systems.",
      learningLabel: "Currently Learning",
    },
    skillGroups: [
      {
        label: "Robotics & Control",
        items: ["ROS2", "MoveIt2", "PlanSys2", "RViz", "Motion Planning", "Robot Kinematics"],
      },
      {
        label: "IoT & Embedded",
        items: ["Raspberry Pi", "ESP32", "StereoPi v2", "PCA9685", "MQTT", "RFID", "Sensor Telemetry"],
      },
      {
        label: "Software & Web",
        items: ["Python", "C/C++","ReactJS", "FastAPI", "C# / .NET", "REST APIs", "SQL Server", "SQLite"],
      },
      {
        label: "Testing & DevOps",
        items: ["Selenium (C#)", "Git", "Azure", "CI/CD Basics"],
      },
    ],
    learningNow: ["ROS2 depth", "Computer vision for robotics", "IoT security"],
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk about robotics, IoT, or engineering systems.",
      copy:
        "I enjoy conversations around robotic platforms, connected devices, IoT security, engineering automation, and the software needed to make physical systems easier to operate.",
      noteEyebrow: "Send a note",
      noteTitle: "Reach out directly",
      name: "Name",
      email: "Email",
      subject: "Subject",
      subjectPlaceholder: "Project, role, or collaboration idea",
      message: "Message",
      submit: "Open Email Draft",
    },
    contactLinks,
    language: { label: "Deutsch", short: "DE" },
  },
  de: {
    profile: {
      ...sharedProfile,
      title: "Robotik- und IoT-Ingenieur | Robotiksoftware | Webanwendungen",
      tagline: "Ich entwickle Robotiksysteme, vernetzte IoT-Prototypen und die Software, die sie nutzbar macht.",
      intro:
        "Ich bin Robotik- und IoT-Ingenieur mit Fokus auf robotische Manipulation, Embedded Systems, sensorgestutzte Automatisierung und vernetzte cyber-physische Plattformen. Web- und Softwareentwicklung setze ich gezielt ein, wenn sie reale technische Systeme uberwachen, steuern oder skalieren hilft.",
      currentFocus:
        "Aktuell lebe ich in Deutschland und absolviere einen Master in Robotics. Parallel vertiefe ich ROS2, robotische Regelung, Computer Vision, IoT-Sicherheit und Software-Schnittstellen fur physische Systeme.",
    },
    navItems: [
      { label: "Start", path: "/" },
      { label: "Der Ingenieur", path: "/app/about" },
      { label: "Projekte", path: "/app/work" },
      { label: "Kontakt", path: "/app/contact" },
    ],
    pageTitles: {
      '/app/about': 'Der Ingenieur',
      '/app/about/experience': 'Berufserfahrung',
      '/app/about/research': 'Forschung',
      '/app/about/education': 'Ausbildung',
      '/app/about/skills': 'Tech Stack',
      '/app/work': 'Projekte',
      '/app/contact': 'Kontakt',
    },
    home: {
      greeting: "Hallo, ich bin",
      ctaLead: "Lassen Sie uns intelligente physische Systeme entwickeln.",
      ctaAbout: "Der Ingenieur",
      ctaContact: "Kontakt aufnehmen",
      ctaWork: "Meine Projekte",
      ctaSchedule: "Termin vereinbaren",
      ctaCv: "Lebenslauf herunterladen",
      glanceEyebrow: "Kurzprofil",
      glanceTitle: "Robotik, IoT und Software fur reale Systeme.",
      strengthsEyebrow: "Schwerpunkte",
      strengthsTitle: "Robotikplattformen, vernetzte Gerate und praxisnahe Engineering-Software.",
      selectedEyebrow: "Ausgewahlte Arbeiten",
      selectedTitle: "Projekte an der Schnittstelle von Hardware, Robotik und Software.",
    },
    highlightStats: [
      { value: "2", label: "entwickelte Robotikarm-Plattformen" },
      { value: "3", label: "Forschungsarbeiten zu IoT und cyber-physischen Systemen" },
      { value: "70cm", label: "Reichweite eines eigenstandig gebauten 5-DOF-Prototyps" },
    ],
    strengths: [
      {
        title: "Robotiksysteme",
        description: "Entwicklung von Roboterarmen, Motion-Planning-Workflows, Simulationen und hardware-nahen Steuerungssystemen.",
      },
      {
        title: "IoT & Embedded Platforms",
        description: "Entwurf vernetzter Prototypen mit Sensoren, Mikroprozessoren, Telemetrie, Gerateauthentifizierung und sicheren Datenflussen.",
      },
      {
        title: "Engineering-Software",
        description: "Webanwendungen, Dashboards, APIs und Automatisierungstools fur Robotik, Labore und technische Teams.",
      },
    ],
    projectsPage: {
      eyebrow: "Projekte",
      title: "Robotik- und IoT-Systeme, gestutzt durch praxisnahe Softwareentwicklung.",
      copy:
        "Diese Projekte zeigen meine Hauptausrichtung: Robotikhardware, IoT-fahige Systeme und Softwareebenen zur Steuerung, Uberwachung und Bereitstellung.",
      repoLabel: "GitHub-Repository",
    },
    projects: [
      {
        name: "Autonomous Voice Controlled Arm Robot (AVCAR)",
        period: "Abschlussarbeit",
        summary:
          "Ein Roboterarm-Projekt mit Fokus auf sprachgesteuerte Aufgabenausfuhrung, Simulation und autonome Manipulationsablaufe.",
        details: [
          "Entwickelt als Abschlussarbeit zu einem autonomen sprachgesteuerten Roboterarm.",
          "Arbeit an Simulations- und Steuerungsablaufen fur Armbewegung und Aufgabenausfuhrung.",
          "Grundlage fur die Erweiterung in Richtung physischer Hardware und wahrnehmungsbasierter Steuerung.",
        ],
        stack: ["Robotik", "Python", "Simulation", "Steuerungssysteme"],
        repo: "https://github.com/HarshitBalaji/AVCAR_Simulation.git",
      },
      {
        name: "HB-A5-01",
        period: "Eigenstandiges Robotikprojekt",
        summary:
          "Mein erstes eigenstandig entwickeltes Roboterarm-Hardwareprojekt, mit Unterstutzung von Dr. Ambika G N.",
        details: [
          "Entwurf eines 5-DOF-Roboterarms mit bis zu 70 cm Reichweite.",
          "Zwei Recheneinheiten: Raspberry Pi 4 fur Steuerung und StereoPi v2 Slim mit Raspberry Pi Compute Module 4 fur Computer Vision.",
          "Integration einer IMX219-83-Stereokamera; Hardware ist aufgebaut, Software befindet sich in Entwicklung.",
        ],
        stack: ["5-DOF Arm", "Raspberry Pi 4", "StereoPi v2", "IMX219-83", "Computer Vision"],
        repo: "https://github.com/HarshitBalaji/AVCAR_Simulation.git",
      },
      {
        name: "Lab Manager Application",
        period: "Carl Zeiss",
        summary:
          "Eine Full-Stack-Labormanagement-Plattform zur Uberwachung von Gerateverfugbarkeit und Status in Forschungsteams.",
        details: [
          "Frontend in React und Backend in FastAPI mit SQL Server entwickelt.",
          "Bereitstellung auf einem Server, der auf das LAN des Labors beschrankt ist.",
          "Enthalt ein Netzwerkmonitor-Tool, das den Status der Gerate anzeigt.",
        ],
        stack: ["React", "FastAPI", "SQL Server", "LAN Deployment"],
      },
      {
        name: "Medical Imaging Diagnostics Tool",
        period: "Carl Zeiss",
        summary:
          "Ein Desktop-Diagnosetool zur Automatisierung von Health Checks an medizinischen Bildgebungssystemen.",
        details: [
          "Prototyp in C# WinForms fur Engineering- und Service-Workflows.",
          "Reduzierte Untersuchungszeit im Service durch wiederholbare automatisierte Prufungen.",
          "Praktische Grundlage fur schnellere Geratefehlersuche.",
        ],
        stack: ["C#", "WinForms", "Automatisierung", "Diagnostik"],
      },
    ],
    cvNav: [
      { label: 'Der Ingenieur', path: '/app/about' },
      { label: 'Berufserfahrung', path: '/app/about/experience' },
      { label: 'Forschung', path: '/app/about/research' },
      { label: 'Ausbildung', path: '/app/about/education' },
      { label: 'Tech Stack', path: '/app/about/skills' },
    ],
    introTags: ["Robotik", "IoT", "Embedded Systems", "Computer Vision", "React/FastAPI"],
    experienceHeader: {
      eyebrow: "Erfahrung",
      title: "Software fur Gerate, Labore und technische Workflows.",
    },
    experience: [
      {
        role: "Graduate Engineer Trainee",
        company: "Carl Zeiss",
        period: "Jul 2024 - Jul 2025",
        location: "Bengaluru",
        logo: "zeiss",
        bullets: [
          "Prototyp eines C#-Diagnosetools fur medizinische Bildgebungssysteme mit automatisierten Health Checks.",
          "Entwicklung und Bereitstellung einer React + FastAPI + SQL Server Labormanagement-Plattform fur R&D-Gerateubersicht.",
          "Verbesserung von Stabilitat und Reporting einer Selenium-Test-Suite mit mehr als 1000 Testfallen.",
        ],
      },
      {
        role: "Software Intern",
        company: "Carl Zeiss",
        period: "Jan 2024 - Jun 2024",
        location: "Bengaluru",
        logo: "zeiss",
        bullets: [
          "Backend-Logik und Deployment-Workflows fur einen internen Feature Store fur ML-Teams.",
          "Engineering-Dashboards und React-Oberflachen fur interne Transparenz und Workflow-Unterstutzung.",
          "QA-Abdeckung fur die VisuCore500-Plattform mit C# und Selenium.",
        ],
      },
      {
        role: "Robotics R&D Intern",
        company: "CAIR Lab, DRDO",
        period: "Aug 2023 - Nov 2023",
        location: "Bengaluru",
        logo: "cair",
        bullets: [
          "Integration von MoveIt2 mit PlanSys2 in ROS2 Humble fur autonome Aufgabenausfuhrung an einem Roboterarm.",
          "Benchmarking von OMPL-Plannern und Tuning von RRTConnect fur stabilere Pfade und bessere Laufzeit.",
        ],
      },
    ],
    educationHeader: {
      eyebrow: "Ausbildung",
      title: "Grundlagen in Robotik, Embedded Systems und Software Engineering.",
    },
    education: [
      {
        title: "Master of Engineering in Robotics",
        school: "Deggendorf Institute of Technology, Campus Cham",
        period: "Mar 2026 - heute",
        location: "Cham, Deutschland",
        logo: "dit",
        bullets: [
          "Schwerpunkte: robotische Manipulation, Motion Planning, Computer Vision und Embedded Control.",
          "Studieninhalte: Robot Kinematics, Machine Learning, Embedded Systems und intelligente Automatisierung.",
          "Arbeit an Simulation, Steuerung und Hardwareintegration mit ROS2.",
        ],
      },
      {
        title: "Bachelor of Engineering in Computer Science and Engineering",
        school: "BMS Institute of Technology & Management",
        period: "Dez 2020 - Jun 2024",
        location: "Bengaluru, Indien",
        logo: "bmsit",
        bullets: [
          "CGPA: 7.89/10",
          "Abschlussarbeit: Autonomous Voice Controlled Arm Robot (AVCAR).",
          "Student Placement Coordinator.",
        ],
      },
      {
        title: "Class 10 (ICSE), Class 12 (ISC)",
        school: "Clarence High School",
        period: "Jun 2017 - Jun 2020",
        location: "Bengaluru, Indien",
        logo: "clarence",
        bullets: ["Class 10 grade: 91.83%", "Class 12 grade: 91.6%"],
      },
    ],
    researchHeader: {
      eyebrow: "Forschung",
      title: "Angewandte Forschung zu IoT, Sicherheit und Cold-Chain-Systemen.",
    },
    researchPapers: [
      {
        title: "IoT-Enabled Geofence and RFID Passkey System for Secure Blood Bag Handover in Cold Chain Logistics",
        year: "2025",
        conference: "Intelligent Machine Processes and AI-Centric Technologies (IMPACT 2025)",
        publication: "In Veroffentlichung in der Springer LNNS-Reihe.",
        summary:
          "Entwurf und Validierung eines sicheren IoT-Cold-Chain-Prototyps, der Blutbeutel-Ubergaben an RFID-Authentifizierung, geofence-basierte Empfangerfreigabe und signierte Telemetrie bindet.",
        contributions: [
          "Proof of Concept mit ESP32 Box Unit, Raspberry Pi Truck Unit, FastAPI-Server, MQTT-Telemetrie und React-Monitoring-Interface.",
          "Duale RFID-Passkey-Validierung mit ECDSA-P256-Signaturen, Replay-Schutz, Audit Logging und Lieferstatus-Ubergangen.",
          "Validierung simulierter Sender-/Empfanger-Ubergaben, Telemetrie, Anomaliealarme und eines skalierbaren Kostenmodells.",
        ],
        highlights: ["ESP32", "Raspberry Pi", "RFID", "Geofencing", "ECDSA", "MQTT"],
      },
      {
        title: "Fed-AE: Privacy-Preserving and Zero-Day Intrusion Detection for IoT Edge Networks",
        year: "2026",
        conference: "IEEE Madhya Pradesh Section Conference (MPCON 2026)",
        publication: "In Veroffentlichung bei IEEE.",
        summary:
          "Fed-AE ist ein federiertes, semi-supervised Intrusion-Detection-Framework fur IoT-Edge-Netzwerke, das Anomalien erkennt, ohne Rohdaten zu teilen.",
        contributions: [
          "Leichtgewichtige Autoencoder auf lokalen benignen Traffic-Daten trainiert und Modellgewichte uber Federated Averaging aggregiert.",
          "Evaluation auf UNSW-NB15 mit nicht-IID Dirichlet-Partitionierung: ROC-AUC 0.90 und PR-AUC 0.51 unter Datenschutzbedingungen.",
          "Schnelle Konvergenz in fruhen Kommunikationsrunden und starke Erkennung bei hochvolumigen Angriffskategorien.",
        ],
        highlights: ["Federated Learning", "Autoencoder", "IoT Edge", "UNSW-NB15", "Zero-Day IDS"],
      },
      {
        title: "Unified Operational-Cyber Anomaly Intelligence for Risk-Aware IoT Blood Bank Cold-Chain Monitoring",
        year: "2026",
        conference: "International Conference on Computing Systems and Intelligent Applications (ComSIA 2026)",
        publication: "Springer-LNNS-anerkannte Konferenz. In Veroffentlichung.",
        award: "Best Paper Award",
        summary:
          "Entwicklung eines Frameworks, das operative Cold-Chain-Abweichungen von cyberbasierter Manipulation der IoT-Telemetrie unterscheidet.",
        contributions: [
          "Kombination operativer Telemetriefeatures mit Gerate-Risikosignalen wie CVSS, EPSS und Device Vulnerability Density.",
          "Test auf einem synthetischen 50-Gerate-Datensatz mit rund 144k Eintragen: Accuracy von 0.96 auf 0.98 verbessert.",
          "Cyber-Anomaly PR-AUC auf 0.703 verbessert und Cyber-False-Negatives gegenuber Baselines um mehr als die Halfte reduziert.",
        ],
        highlights: ["Risk-Aware IoT", "Cyber-Physical Security", "CVSS", "EPSS", "Anomaly Intelligence"],
      },
    ],
    skillsHeader: {
      eyebrow: "Tech Stack",
      title: "Werkzeuge fur Robotik und vernetzte Systeme.",
      learningLabel: "Aktuell im Fokus",
    },
    skillGroups: [
      {
        label: "Robotik & Steuerung",
        items: ["ROS2", "MoveIt2", "PlanSys2", "RViz", "Motion Planning", "Robot Kinematics"],
      },
      {
        label: "IoT & Embedded",
        items: ["Raspberry Pi", "ESP32", "StereoPi v2", "PCA9685", "MQTT", "RFID", "Sensor Telemetry"],
      },
      {
        label: "Software & Web",
        items: ["Python", "C/C++","ReactJS", "FastAPI", "C# / .NET", "REST APIs", "SQL Server", "SQLite"],
      },
      {
        label: "Testing & DevOps",
        items: ["Selenium (C#)", "Git", "Azure", "CI/CD Basics"],
      },
    ],
    learningNow: ["ROS2 Vertiefung", "Computer Vision fur Robotik", "IoT-Sicherheit"],
    contactPage: {
      eyebrow: "Kontakt",
      title: "Lassen Sie uns uber Robotik, IoT oder Engineering-Systeme sprechen.",
      copy:
        "Ich freue mich uber Gesprache zu Robotikplattformen, vernetzten Geraten, IoT-Sicherheit, Engineering-Automatisierung und Software fur physische Systeme.",
      noteEyebrow: "Nachricht senden",
      noteTitle: "Direkt Kontakt aufnehmen",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      subjectPlaceholder: "Projekt, Rolle oder Kooperationsidee",
      message: "Nachricht",
      submit: "E-Mail-Entwurf offnen",
    },
    contactLinks,
    language: { label: "English", short: "EN" },
  },
};

export const {
  profile,
  navItems,
  highlightStats,
  strengths,
  projects,
  experience,
  education,
  researchPapers,
  skillGroups,
  learningNow,
} = portfolioContent.en;

export { contactLinks };
