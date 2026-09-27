import Section from '../ui/Section'
import Tag from '../ui/Tag'
import ProjectImage from '../ui/ProjectImage'
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'
import { projects, type Project } from '../../data/portfolio'

function WhatIBuilt({ points }: { points: string[] }) {
  if (points.length === 0) return null
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
        What I built
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-2.5 text-sm leading-relaxed text-neutral-300"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repoUrl && !project.liveUrl) return null
  return (
    <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5 text-sm">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target={project.repoUrl.startsWith('http') ? '_blank' : undefined}
          rel={project.repoUrl.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-white"
        >
          <GitHubIcon width={15} height={15} />
          GitHub
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
          rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-white"
        >
          <ArrowUpRightIcon width={15} height={15} />
          Live Demo
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p !== featured)

  return (
    <Section
      id="projects"
      index="01"
      eyebrow="01 — Projects"
      title="Featured Projects"
      description="Selected projects I've built while studying Computer Science."
    >
      {/* Featured project — large horizontal showcase, ~58/42 split */}
      <article className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.4fr_1fr]">
        <ProjectImage
          src={featured.image}
          alt={featured.title}
          className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[24rem]"
        />
        <div className="flex flex-col border-t border-white/10 p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <span className="font-mono text-xs text-accent">
            {featured.number}
          </span>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
            {featured.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {featured.description}
          </p>

          <WhatIBuilt points={featured.highlights} />

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-auto">
            <ProjectLinks project={featured} />
          </div>
        </div>
      </article>

      {/* Remaining projects — consistent two-column cards */}
      {rest.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col border border-white/10"
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-accent">
                  {project.number}
                </span>
                <h3 className="mt-2 font-serif text-lg text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <WhatIBuilt points={project.highlights} />

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-auto">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
