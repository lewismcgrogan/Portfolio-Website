export const profile = {
  name: "Lewis McGrogan",
  title: "Final-year MEng Computer Science Student",
  tagline:
    "Applied ML, distributed systems, and performance-aware software engineering — building reproducible pipelines and reliable backend systems.",

  location: "Belfast, Northern Ireland",
  email: "lewismartinmcgrogan@gmail.com",

  links: {
    github: "https://github.com/lewismcgrogan",
    linkedin: "https://www.linkedin.com/in/lewis-mc-grogan-944833270/",
    cv: "/cv.pdf",
  },

  about: [
    "Final-year MEng Computer Science student at Queen’s University Belfast with a strong academic record, specialising in applied machine learning, distributed systems, and performance-aware software engineering.",
    "Experienced in building reproducible ML pipelines, developing full-stack web applications, and implementing concurrent, networked systems.",
    "Currently seeking graduate roles across software engineering, backend, and applied ML (2026).",
  ],

  skills: {
    languages: ["Java", "Python", "TypeScript", "MATLAB", "C#", "SQL"],
    frameworks: ["React", "Next.js", "PyTorch", ".NET"],
    tools: ["Git/GitHub", "REST APIs", "Docker", "Linux", "SLURM", "Vite"],
  },

  // Only the 4 repos you asked to display
  projects: [
    {
      name: "CSC4008 Team Software Design Project",
      description:
        "Team-based software engineering project delivered for CSC4008, focused on maintainable design, collaboration, and a full-stack implementation.",
      tech: ["React", "TypeScript", "REST APIs", "Software Design"],
      highlights: [
        "Built as part of a multi-developer team with clear division of responsibilities.",
        "Focused on clean architecture, consistent patterns, and maintainable code.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/CSC4008-Team-Software-Design-Project",
        demo: "",
      },
    },
    {
      name: "LewisChessGame",
      description:
        "React + TypeScript chess UI with legal move handling using chess.js.",
      tech: ["React", "TypeScript", "chess.js"],
      highlights: [
        "Clean UI with accurate rules enforced by a dedicated chess engine library.",
        "Maintainable front-end structure with reusable components.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/LewisChessGame",
        demo: "",
      },
    },
    {
      name: "DistributedChat",
      description:
        "Distributed peer-to-peer chat system with real-time messaging and file transfer.",
      tech: ["Java", "Sockets", "Concurrency"],
      highlights: [
        "Designed a multi-node messaging workflow with clear separation of concerns.",
        "Implemented reliable communication patterns using core concurrency primitives.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/DistributedChat",
        demo: "",
      },
    },
    {
      name: "Facial Recognition System",
      description:
        "MATLAB facial detection & recognition pipeline using feature extraction and classical ML classifiers.",
      tech: ["MATLAB", "Computer Vision", "HOG", "LBP", "SVM", "KNN"],
      highlights: [
        "Combined multiple feature extractors with traditional classifiers for robust performance.",
        "Built a structured evaluation pipeline for comparing approaches.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/Facial-Recognition-System",
        demo: "",
      },
    },
  ],

  education: [
    {
      course: "MEng Computer Science",
      school: "Queen’s University Belfast",
      dates: "Sep 2022 — May 2026",
      notes: [
        "Final-year average: 81%",
        "Expected classification: First-Class Honours / 2:1",
      ],
    },
    {
      course: "A-Levels / GCSEs",
      school: "Our Lady & St. Patrick’s College, Knock",
      dates: "Sep 2015 — Jun 2022",
      notes: ["A-Levels: AAB", "GCSEs: 10 A Grades, 1 A*"],
    },
  ],
} as const;
