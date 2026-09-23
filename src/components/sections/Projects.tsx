import Section from '../ui/Section'
import Tag from '../ui/Tag'
import { ArrowUpRightIcon, CodeIcon } from '../ui/icons'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Things I've built"
      description="A selection of academic and personal projects. This section grows as I build more."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={`${project.title}-${i}`}
            className="card card-hover flex flex-col"
          >
            {project.type && (
              <span className="mb-3 w-fit rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-glow">
                {project.type}
              </span>
            )}

            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{project.summary}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4 text-sm">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    <CodeIcon width={16} height={16} />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent-glow transition-colors hover:text-white"
                  >
                    <ArrowUpRightIcon width={16} height={16} />
                    Live
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
