export const profile = {
  name: "Lewis McGrogan",
  title: "Final-year MEng Computer Science Student",
  tagline:
    "Full-stack developer (React/TypeScript + APIs) with applied machine learning experience — building clean, maintainable systems end-to-end.",

  location: "Belfast, Northern Ireland",
  email: "lewismartinmcgrogan@gmail.com",


  links: {
    github: "https://github.com/lewismcgrogan",
    linkedin: "https://www.linkedin.com/in/lewis-mc-grogan-944833270/",
    cv: "/cv.pdf",
  },

  about: [
    "Final-year MEng Computer Science student at Queen’s University Belfast with a strong academic record and a practical focus on full-stack web development and applied machine learning.",
    "I build web applications end-to-end: React + TypeScript frontends, REST API integration, and backend logic with clean interfaces and maintainable structure.",
    "Alongside full-stack work, I’ve built reproducible ML pipelines in PyTorch, including experimental evaluation and model performance analysis.",
    "Currently seeking graduate software engineering roles starting 2026.",
  ],

  skills: {
    languages: ["TypeScript", "Java", "Python", "C#", "SQL", "MATLAB"],
    frameworks: ["React", "Next.js", ".NET", "PyTorch"],
    tools: ["Git/GitHub", "REST APIs", "Docker", "Linux", "Vite", "SLURM"],
  },

  projects: [
    {
      name: "CSC4008 Team Software Design Project",
      description:
        "Team-delivered full-stack application with an emphasis on clean design, modularity, and frontend–backend integration.",
      tech: ["React", "TypeScript", "REST APIs", "Software Design"],
      highlights: [
        "Built within a multi-developer team using agreed architecture and coding standards.",
        "Implemented all frontend features and integrated them with backend API endpoints.",
        "Focused on maintainability: clear module boundaries, consistent patterns, and readable code.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/CSC4008-Team-Software-Design-Project",
        demo: "",
      },
    },
    {
      name: "LewisChessGame",
      description:
        "(Personal Project) React + TypeScript chess app with legal-move enforcement using chess.js and a clean, responsive UI.",
      tech: ["React", "TypeScript", "chess.js"],
      highlights: [
        "Built an interactive UI with predictable state updates and reusable components.",
        "Used a dedicated rules engine to ensure correct move validation and gameplay logic.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/LewisChessGame",
        demo: "",
      },
    },
    {
      name: "DistributedChat",
      description:
        "Multi-client chat system using Java sockets and concurrency primitives to support concurrent connections and messaging.",
      tech: ["Java", "Sockets", "Concurrency"],
      highlights: [
        "Implemented thread-safe client handling for concurrent connections and broadcasting.",
        "Designed clean separation of concerns for connection handling, messaging, and lifecycle management.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/DistributedChat",
        demo: "",
      },
    },
    {
      name: "Facial Recognition System",
      description:
        "Classical facial recognition pipeline using handcrafted feature extraction and traditional ML classifiers.",
      tech: ["MATLAB", "HOG", "LBP", "Gabor", "SVM", "KNN"],
      highlights: [
        "Compared multiple feature extractors and classifiers to evaluate performance trade-offs.",
        "Built a structured evaluation workflow for repeatable experiments and results comparison.",
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
      notes: ["Final-year average: 81%", "Expected: First-Class Honours / 2:1"],
    },
    {
      course: "A-Levels / GCSEs",
      school: "Our Lady & St. Patrick’s College, Knock",
      dates: "Sep 2015 — Jun 2022",
      notes: ["A-Levels: AAB", "GCSEs: 10 A Grades, 1 A*"],
    },
  ],
} as const;
