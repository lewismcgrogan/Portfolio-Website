export const profile = {
  name: "Lewis McGrogan",
  title: "Final-year MEng Computer Science Student",
  tagline:
    "Full-stack software engineer with strengths in React, APIs, and backend systems — alongside applied ML and distributed systems.",

  location: "Belfast, Northern Ireland",
  email: "lewismartinmcgrogan@gmail.com",

  links: {
    github: "https://github.com/lewismcgrogan",
    linkedin: "https://www.linkedin.com/in/lewis-mc-grogan-944833270/",
    cv: "/cv.pdf",
  },

  about: [
    "Final-year MEng Computer Science student at Queen’s University Belfast with a strong academic record and a practical focus on full-stack web development, backend systems, and applied machine learning.",
    "Experienced in designing and building full-stack applications end-to-end — from React and TypeScript frontends to RESTful APIs, data handling, and deployment.",
    "Comfortable working across the stack: translating requirements into clean UI, structuring backend logic, and integrating services with clear API boundaries.",
    "Currently seeking graduate roles across software engineering, full-stack development, and backend engineering (2026).",
  ],

  skills: {
    languages: ["Java", "Python", "TypeScript", "MATLAB", "C#", "SQL"],
    frameworks: ["React", "Next.js", "PyTorch", ".NET"],
    tools: [
      "Git/GitHub",
      "REST APIs",
      "Docker",
      "Linux",
      "SLURM",
      "Vite",
    ],
  },

  projects: [
    {
      name: "CSC4008 Team Software Design Project",
      description:
        "Team-based full-stack web application delivered for CSC4008, focused on scalable design, collaboration, and maintainable frontend–backend integration.",
      tech: [
        "React",
        "TypeScript",
        "REST APIs",
        "Full-Stack Development",
        "Software Design",
      ],
      highlights: [
        "Designed and implemented core frontend features using React and TypeScript.",
        "Integrated frontend components with backend REST APIs using clear contracts.",
        "Worked within a multi-developer team, following agreed architecture and coding standards.",
        "Focused on maintainability, modular structure, and readable, production-style code.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/CSC4008-Team-Software-Design-Project",
        demo: "",
      },
    },
    {
      name: "LewisChessGame",
      description:
        "Full-stack style single-page application built with React and TypeScript, featuring a responsive UI and rule enforcement via a chess engine library.",
      tech: ["React", "TypeScript", "chess.js"],
      highlights: [
        "Built an interactive, responsive frontend with clear component structure.",
        "Integrated game logic cleanly via a third-party engine library.",
        "Focused on state management and maintainable UI logic.",
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
        "MATLAB facial detection and recognition pipeline using feature extraction and classical machine learning classifiers.",
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
