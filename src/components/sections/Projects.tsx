import Section from '../ui/Section'
import Tag from '../ui/Tag'
import ProjectImage from '../ui/ProjectImage'
import { ArrowUpRightIcon, GitHubIcon } from '../ui/icons'
import { projects, type Project } from '../../data/portfolio'

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repoUrl && !project.liveUrl) return null
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
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
      eyebrow="01 — Projects"
      title="Selected Projects"
      description="A selection of projects I've built while studying Computer Science."
    >
      {/* Featured project */}
      <article className="grid gap-8 border border-white/10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
        <ProjectImage
          src={featured.image}
          alt={featured.title}
          className="aspect-[16/10] lg:order-2"
        />
        <div className="flex flex-col lg:order-1">
          <span className="font-mono text-xs text-accent">
            {featured.number}
          </span>
          <h3 className="mt-3 font-serif text-2xl text-white">
            {featured.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {featured.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-auto pt-5">
            <ProjectLinks project={featured} />
          </div>
        </div>
      </article>

      {/* Remaining projects */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <article
            key={project.title}
            className="flex flex-col border border-white/10 p-6"
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              className="aspect-[16/10]"
            />
            <span className="mt-5 font-mono text-xs text-accent">
              {project.number}
            </span>
            <h3 className="mt-2 font-serif text-lg text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
