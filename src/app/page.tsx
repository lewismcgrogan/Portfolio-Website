import { profile } from "../data/profile";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>;
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("glass card-shadow rounded-3xl p-5 sm:p-6", className)}>
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-900 ring-1 ring-sky-200">
      {children}
    </span>
  );
}

function GhostPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-12">
      <div className="mb-6 sm:mb-7">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-slate-200/70" />;
}

function ProjectCard({ p }: { p: any }) {
  return (
    <Card className="transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-slate-900">
            {p.name}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{p.description}</p>
        </div>

        <div className="flex shrink-0 gap-3 text-sm">
          {p.links?.repo ? (
            <a
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
              href={p.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          ) : null}
          {p.links?.demo ? (
            <a
              className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(p.tech ?? []).slice(0, 7).map((t: string) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      {p.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          {p.highlights.slice(0, 2).map((h: string) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}

export default function Home() {
  const featured = profile.projects;

  return (
    <main>
      {/* Soft blue background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute top-40 -left-24 h-[520px] w-[520px] rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-220px] h-[640px] w-[640px] rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/70 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <a href="#top" className="font-semibold tracking-tight text-slate-900">
              {profile.name}
            </a>

            <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
              <a className="hover:text-slate-900" href="#about">
                About
              </a>
              <a className="hover:text-slate-900" href="#projects">
                Projects
              </a>
              <a className="hover:text-slate-900" href="#skills">
                Skills
              </a>
              <a className="hover:text-slate-900" href="#contact">
                Contact
              </a>
            </nav>
          </div>
        </Container>
      </header>

      <div id="top" />

      <Container>
        {/* Hero */}
        <section className="py-12 sm:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Open to graduate roles (2026)
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {profile.name}
              </h1>

              <p className="mt-3 text-base text-slate-700">
                {profile.title} <span className="text-slate-400">—</span>{" "}
                {profile.location}
              </p>

              <p className="mt-4 max-w-2xl text-slate-700">{profile.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href={`mailto:${profile.email}`}>Email me</PrimaryButton>
                <SecondaryButton href={profile.links.github}>GitHub</SecondaryButton>
                <SecondaryButton href={profile.links.linkedin}>LinkedIn</SecondaryButton>
                <SecondaryButton href={profile.links.cv}>Download CV</SecondaryButton>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <GhostPill>{profile.projects.length} projects</GhostPill>
                <GhostPill>{profile.skills.languages.length}+ languages</GhostPill>
                <GhostPill>Backend + systems</GhostPill>
              </div>
            </div>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/70 via-white/40 to-blue-100/60" />
              <div className="relative">
                <div className="text-sm font-semibold text-slate-900">
                  Snapshot
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  A quick overview of what I build — clean engineering, strong
                  fundamentals, and projects you can skim in a minute.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
                    <div className="text-xs uppercase tracking-wide text-slate-500">
                      Strengths
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Pill>Distributed systems</Pill>
                      <Pill>Full-stack</Pill>
                      <Pill>Applied ML</Pill>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
                    <div className="text-xs uppercase tracking-wide text-slate-500">
                      Contact
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                      <div className="truncate">
                        <span className="font-medium text-slate-900">Email:</span>{" "}
                        {profile.email}
                      </div>
                      <div className="mt-1">
                        <span className="font-medium text-slate-900">Location:</span>{" "}
                        {profile.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Divider />

        <Section
          id="about"
          title="About Me"
          subtitle="A short intro:"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <div className="space-y-3 text-sm text-slate-700">
                {(profile.about ?? []).map((p: string) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Core stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.languages.slice(0, 4).map((s: string) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>

              <div className="mt-6 text-xs uppercase tracking-wide text-slate-500">
                Frameworks
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(profile.skills.frameworks ?? []).map((s: string) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="projects"
          title="Selected Projects"
          subtitle="A few highlights - with links to repositories."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((p: any) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="What I actually use.">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Languages
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.languages.map((s: string) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Frameworks
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(profile.skills.frameworks ?? []).map((s: string) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Tools
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(profile.skills.tools ?? []).map((s: string) => (
                  <GhostPill key={s}>{s}</GhostPill>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="The quickest way to reach me."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-1">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </div>
              <a
                className="mt-2 inline-block text-sm font-semibold text-slate-900 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>

              <div className="mt-6 text-xs uppercase tracking-wide text-slate-500">
                Links
              </div>

              <div className="mt-2 flex flex-col gap-2 text-sm">
                <a
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:decoration-sky-500"
                  href={profile.links.cv}
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </div>
            </Card>

            <Card className="md:col-span-2">
              <div className="text-sm font-semibold text-slate-900">
                One-click email
              </div>
              <p className="mt-2 text-sm text-slate-600">
                This opens your email client with a pre-filled subject line.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    "Portfolio enquiry"
                  )}&body=${encodeURIComponent(
                    `Hi Lewis,\n\nI saw your portfolio and wanted to get in touch about...\n\n—`
                  )}`}
                >
                  Compose email
                </PrimaryButton>

                <SecondaryButton href={profile.links.github}>
                  View my GitHub
                </SecondaryButton>
              </div>
            </Card>
          </div>
        </Section>

        <footer className="py-12 text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built by me with Next.js.
        </footer>
      </Container>
    </main>
  );
}
