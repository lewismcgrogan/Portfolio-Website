export const profile = {
  name: "Lewis McGrogan",
  title: "Computer Scientist",
  tagline: "Final-year MEng Computer Science Student at Queens University Belfast",

  location: "Belfast, Northern Ireland",
  email: "lewismartinmcgrogan@gmail.com",

  links: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
    cv: "/cv.pdf", // put cv.pdf in /public
  },

  about: [
    "I’m a final-year MEng Computer Science student focused on backend systems, data, and applied ML.",
    "I enjoy building products end-to-end: designing APIs, shipping UI, and deploying reliably.",
    "Currently looking for graduate software roles (2026) / open to internships and placements.",
  ],

  skills: {
    languages: ["Python", "Java", "C#", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", ".NET", "Node.js", "FastAPI"],
    tools: ["Docker", "Git", "CI/CD", "Linux", "PostgreSQL"],
  },

  projects: [
    {
      name: "Project Name 1",
      description: "One sentence: what it does + impact.",
      tech: ["Next.js", "PostgreSQL", "Docker"],
      highlights: [
        "Did X (metric or result).",
        "Implemented Y (interesting technical detail).",
      ],
      links: {
        demo: "https://example.com",
        repo: "https://github.com/YOUR_USERNAME/project-1",
      },
    },
    {
      name: "Project Name 2",
      description: "One sentence: what it does + impact.",
      tech: ["Python", "FastAPI"],
      highlights: ["Feature A", "Feature B"],
      links: {
        demo: "",
        repo: "https://github.com/YOUR_USERNAME/project-2",
      },
    },
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Company Name",
      dates: "Jun 2024 — Aug 2024",
      bullets: [
        "Built ____ that reduced ____ by ____%.",
        "Worked with ____ and shipped ____.",
      ],
    },
  ],

  education: [
    {
      course: "MEng Computer Science",
      school: "Queens University Belfast",
      dates: "2022 — 2026",
      notes: ["Predicted/Current Grade: 2:1 / Firsts"],
    },
  ],
};
