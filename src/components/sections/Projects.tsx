import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Things I've built"
      description="A selection of academic and personal projects across web development, machine learning, NLP, and computer vision. Repo and demo links are placeholders for now — I'll point them at the real sources soon."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={`${project.title}-${i}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-base-800/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
          >
            {/* Accent header band */}
            <div className="relative flex items-center justify-between gap-4 border-b border-white/5 bg-gradient-to-br from-accent/10 via-transparent to-teal/10 px-6 py-5">
              <div className="flex items-center gap-3">
                {project.accent && (
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-base-900/70 text-xl"
                  >
                    {project.accent}
                  </span>
                )}
                <div>
                  {project.domain && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-glow">
                      {project.domain}
                    </span>
                  )}
                  {project.type && (
                    <p className="text-xs text-slate-500">{project.type}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-snug text-white">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">{project.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              {/* Links — buttons render whenever a (placeholder) URL is set */}
              {(project.repoUrl || project.liveUrl) && (
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target={
                        project.repoUrl.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        project.repoUrl.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-accent/50 hover:text-white"
                    >
                      <GitHubIcon width={16} height={16} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={
                        project.liveUrl.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        project.liveUrl.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-lg bg-accent/15 px-3.5 py-2 text-sm font-medium text-accent-glow transition-colors hover:bg-accent/25 hover:text-white"
                    >
                      <ArrowUpRightIcon width={16} height={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
