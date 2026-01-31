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

  projects: [
    {
      name: "DistributedChat",
      description:
        "Distributed peer-to-peer chat system with real-time messaging and file transfer.",
      tech: ["Java", "Sockets", "Concurrency"],
      highlights: [
        "Designed a multi-node messaging workflow with clear separation of concerns.",
        "Implemented reliable communication and file transfer logic.",
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
        "Built a full evaluation pipeline with structured experiment tracking.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/Facial-Recognition-System",
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
      name: "Knowledge Distillation for ECG Classification",
      description:
        "Final-year research project: ECG classifier using PTB-XL and knowledge distillation between CNN models.",
      tech: ["Python", "PyTorch", "CNNs", "SLURM", "PTB-XL"],
      highlights: [
        "Built full reproducible training + evaluation pipeline on 21,799 multi-lead ECG recordings.",
        "Explored temperature scaling and student-teacher capacity trade-offs.",
      ],
      links: {
        repo: "",
        demo: "",
      },
    },
    {
      name: "Full-Stack Web Apps",
      description:
        "Team software engineering project with React/TypeScript front-ends and RESTful backends.",
      tech: ["React", "TypeScript", "REST APIs", "Vite"],
      highlights: [
        "Integrated frontend with backend APIs using clear API contracts.",
        "Focused on maintainable modular design and responsive layout.",
      ],
      links: {
        repo: "",
        demo: "",
      },
    },
    {
      name: "Personal Portfolio",
      description:
        "This portfolio site built with Next.js shows my work, skills, and contact info.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Built with modern stack (Next.js/Turbopack) and responsive design.",
        "Integrates dynamic profile data and smooth navigation.",
      ],
      links: {
        repo: "https://github.com/lewismcgrogan/Portfolio-Website",
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
