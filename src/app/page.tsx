import { profile } from "@/data/profile";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </section>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200">
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-base text-neutral-700 dark:text-neutral-300">
          {profile.title} — {profile.location}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">{profile.tagline}</p>

        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a className="underline" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="underline" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="underline" href={profile.links.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </header>

      {/* About */}
      <Section title="About">
        <div className="space-y-3">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Languages
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.skills.languages.map((s) => (
                <Pill key={s} text={s} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Frameworks
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.skills.frameworks.map((s) => (
                <Pill key={s} text={s} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Tools
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.skills.tools.map((s) => (
                <Pill key={s} text={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-5">
          {profile.projects.map((p) => (
            <article key={p.name} className="rounded-2xl border p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {p.description}
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  {p.links.repo && (
                    <a className="underline" href={p.links.repo} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                  )}
                  {p.links.demo && (
                    <a className="underline" href={p.links.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Pill key={t} text={t} />
                ))}
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-5">
          {profile.experience.map((e) => (
            <div key={e.role + e.company} className="rounded-2xl border p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="font-semibold">
                  {e.role} · {e.company}
                </div>
                <div className="text-sm text-neutral-500">{e.dates}</div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="space-y-5">
          {profile.education.map((ed) => (
            <div key={ed.course} className="rounded-2xl border p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="font-semibold">
                  {ed.course} · {ed.school}
                </div>
                <div className="text-sm text-neutral-500">{ed.dates}</div>
              </div>
              {ed.notes?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {ed.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <footer className="py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </main>
  );
}
